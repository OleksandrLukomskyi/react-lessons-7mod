

import Product from "components/Product";


const ProductsList = ({products, handleLoadMore, isShowBtn}) => {
	console.log(products);
	return (
		<>
			
			{products.map((el) => <Product key={el.id} product={el} />)}

			{isShowBtn&&(<button className='btn btn-secondary mt-5 mx-5' onClick={handleLoadMore}>
				load more
			</button>)}
		</>
	)
}

export default ProductsList
