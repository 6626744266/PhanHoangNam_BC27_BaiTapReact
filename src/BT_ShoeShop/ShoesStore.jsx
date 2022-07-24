import React, { Component } from 'react'
import Modal from './Modal'
import ProductItem from './ProductItem'
import ProductList from './ProductList'
import data from './data.json'
import Cart from './Cart'

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
            carts: [],
            isOpenCart: false,
            check: -1
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
    handleAdded = (product) => {


        const index = this.state.carts.findIndex(item => item.id === product.id)

        if (index === -1) {
            const carts = [...this.state.carts, { ...product, quantity: 1 }]
            this.setState({ carts })
        }
        else if (this.state.check !== 1) {
            const carts = [...this.state.carts]
            carts[index].quantity += 1
            this.setState({ carts })
        }
        else return alert('số lượng bạn chọn vượt quá tồn kho')

    }







    handleOpenCart = () => {
        this.setState({ isOpenCart: true })
    }
    handleCloseCart = () => {
        this.setState({ isOpenCart: false })
    }


    handleChangeQuantity = (productId, quantity) => {
        const carts = this.state.carts.map((item) => {
            if (item.id === productId) {
                if (this.state.check !== 1)
                    return { ...item, quantity: item.quantity + quantity }
            }
            return item
        })
        this.setState({ carts })

    }
    handleRemove = (productId) => {
        const carts = this.state.carts.filter(item => item.id != productId)
        this.setState({ carts })
    }
    handleCheckQuantity = (productId, quantity) => {

        this.state.products.map((item) => {
            if (item.id === productId) {
                if (item.quantity < quantity + 1) {
                    this.setState({ check: 1 })
                    item.quantity -= 1
                    return (
                        alert("số lượng bạn chọn vượt quá tồn kho"))

                }
            }
        })
    }

    render() {
        const { product, products, selectedProduct, isOpen, carts, isOpenCart, check } = this.state
        return (

            <div>
                <h1 className='text-center'>Shoes Shop</h1>

                <div className="d-flex justify-content-end mb-5  " >
                    <button className="btn btn-success" style={{ width: '80px', height: "60px", marginRight: '85px' }} onClick={this.handleOpenCart}>
                        Cart
                    </button>
                </div>
                < ProductList productsData={products} onSelected={this.handleSelected} onOpen={this.handleOpen} onAdded={this.handleAdded} />

                <Modal selectedProduct={selectedProduct} isOpen={isOpen} onClose={this.handleClose} />
                <Cart carts={carts} isOpenCart={isOpenCart} onCloseCart={this.handleCloseCart} onChangeQuantity={this.handleChangeQuantity} onRemove={this.handleRemove} checkQuantity={this.handleCheckQuantity} check={check} />
            </div >
        )
    }
}
