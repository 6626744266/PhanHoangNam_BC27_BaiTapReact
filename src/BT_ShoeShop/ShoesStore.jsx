import React, { Component } from 'react'
import Modal from './Modal'
import ProductItem from './ProductItem'
import ProductList from './ProductList'
import data from './data.json'

export default class ShoesStore extends Component {
    constructor(props) {
        super(props)

        this.state = {
            product: null,
            products: data,
            selectedProduct: {
                id: 1,
                name: "Adidas Prophere",
                alias: "adidas-prophere",
                price: 350,
                description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                quantity: 995,
                image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
            },
            isOpen: false,
        }
    }

    handleSelected = (product) => {
        this.setState({ selectedProduct: product })
    }
    handleOpen = () => {
        this.setState({ isOpen: true })
    }
    handleClose = () => {
        this.setState({ isOpen: false })
    }


    render() {
        const { product, products, selectedProduct, isOpen } = this.state
        return (

            <div>
                <h1 className='text-center'>Shoes Shop</h1>

                < ProductList productsData={products} onSelected={this.handleSelected} onOpen={this.handleOpen} />

                <Modal selectedProduct={selectedProduct} isOpen={isOpen} onClose={this.handleClose} />
            </div>
        )
    }
}
