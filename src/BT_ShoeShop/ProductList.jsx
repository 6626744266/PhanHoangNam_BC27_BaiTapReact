import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ productsData, onSelected, onOpen }) => {

    const handleSelect = (product) => {
        onSelected(product)
        onOpen()
    }


    const products = productsData
    return (

        < div className="row w-100" >
            {
                products.map((product) => {
                    return (
                        <div className='col-sm-4' key={product.id}>
                            <ProductItem item={product} onSelect={() => handleSelect(product)
                            }
                            />
                        </div>


                    )
                })
            }
        </ div>

    )
}

export default ProductList