import FormCreateProduct from 'components/Forms/FormCreateProduct';
import FormSearchProducts from 'components/Forms/FormSearchProducts';
import ProductsList from 'components/ProductsList'
import {useEffect, useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectorError, selectorIsLoading, selectorProducts, selectorSingleProduct } from 'store/products/selectors';
import { createProductsThunk, getProductsThunk } from 'store/products/thunks';




const ProductsPage = () => {
	const products = useSelector(selectorProducts)
	const isLoading = useSelector(selectorIsLoading)
	const error = useSelector(selectorError)
	const singleProduct = useSelector(selectorSingleProduct)
	const dispatch = useDispatch()
	const [counter, setCounter] = useState(0)


	
	useEffect(() => {
			dispatch(getProductsThunk())
		
	}, [dispatch])

	console.log('singleProduct', singleProduct)

	const handleLoadMore = () => {
		// setPage((prev) => prev + 1)
	}
	
	const createProduct = (body) => {
  dispatch(createProductsThunk(body))
	}




  return (
    <>
    	<button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
	    {isLoading && <h1>loading...</h1>}
				{error && <h1>{error}</h1>}
				<FormCreateProduct createProduct={createProduct}/>
	      <FormSearchProducts />
	      {products&&<ProductsList handleLoadMore={handleLoadMore} products={products} />}
			{/* {products&&<ProductsList handleLoadMore={handleLoadMore} products={products} isShowBtn={isShowBtn}/>} */}
    </>
    
  )
}

export default ProductsPage;