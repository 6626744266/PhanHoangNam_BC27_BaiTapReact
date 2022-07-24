import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ productsData, onSelected, onOpen, onAdded }) => {

    const handleSelect = (product) => {
        onSelected(product)
        onOpen()
    }
    const handleAdd = (product) => {
        onAdded(product)
    }


    const products = productsData
    return (

        < div className="row w-100" >
            {
                products.map((product) => {
                    return (
                        <div className='col-sm-4' key={product.id}>
                            <ProductItem item={product} onAdd={() => handleAdd(product)} onSelect={() => handleSelect(product)
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