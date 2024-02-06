import FormSearchProducts from 'components/Forms/FormSearchProducts';
import ProductsList from 'components/ProductsList'
import { useState, useCallback, useEffect } from 'react';
import { getProductsApi} from 'api/products';
import {useSearchParams } from 'react-router-dom';

const LIMIT = 10

const ProductsPage = () => {
  const [products, setProducts] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState('')
	const [page, setPage] = useState(1)
	const [isShowBtn, setIsShowBtn] = useState(false)




	const [searchParams] = useSearchParams()
	// const location = useLocation()
	// console.log('location', location);

// 	const getProducts = useCallback(async () => {
// 		try {
// 			setIsLoading(true)
// 			setError('')
// 			const response = await getAllProducts(page * LIMIT, LIMIT)
// 			setProducts((prev) => (prev ? [...prev, ...response.products] : response.products))
// 			if (response.products.length < response.total)setIsShowBtn(true)
// 		} catch (error) {
// 			setError(error.message)
// 		} finally {
// 			setIsLoading(false)
// 		}
// 	}, [page])

//   const getProductsWithSearch = useCallback(async (query) => {
// 		try {
// 			setIsLoading(true)
// 			setIsShowBtn(false)
// 			setError('')
// 			const response = await getSearchProducts(query)
// 			setProducts( response.products)
// 			if (response.products.length < response.total)setIsShowBtn(true)
// 		} catch (error) {
// 			setError(error.message)
// 		} finally {
// 			setIsLoading(false)
// 		}
// 	}, [])

	const getProducts = useCallback(async (query) => {
		try {
			setIsLoading(true)
			setIsShowBtn(false)
			setError('')
			const response = await getProductsApi(page * LIMIT - LIMIT, LIMIT, query)
			setProducts((prev) => (prev && !query ? [...prev, ...response.products] : response.products))
			if (response.products.length < response.total)setIsShowBtn(true)
		} catch (error) {
			setError(error.message)
		} finally {
			setIsLoading(false)
		}
	}, [page])

	useEffect(() => {
		const query = searchParams.get('search')
		getProducts(query)
		query && setPage(1);
	}, [getProducts, searchParams])

	const handleLoadMore = () => {
		setPage((prev) => prev + 1)
	}




  return (
    <>
    {isLoading && <h1>loading...</h1>}
			{error && <h1>{error}</h1>}
      <FormSearchProducts />
      {products&&<ProductsList handleLoadMore={handleLoadMore} products={products} isShowBtn={isShowBtn}/>}
    </>
  )
}

export default ProductsPage;