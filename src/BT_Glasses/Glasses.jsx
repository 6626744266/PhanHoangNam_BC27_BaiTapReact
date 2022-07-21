import React, { Component } from 'react'
import Header from './Header'
import Model from './Model'
import Change from './Change'
import data from './data.json'

export default class glasses extends Component {
    constructor(props) {
        super(props)

        this.state = {

            selectedProduct: {
                url: "./glassesImage/v1.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
                name: "GUCCI G8850U"
            }
        }
    }

    selectedProduct = (product) => {
        this.setState({ selectedProduct: product })
    }

    handleChange = (model) => {
        const imgURL = `./glassesImage/${model}.png`
        const { ...payload } = this.state.values
    }


    render() {
        return (
            < div style={{
                backgroundImage: `url("./glassesImage/background.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
            }
            }>
                <Header />
                <Model imgURL={this.state.selectedProduct.url} selectedProduct={this.state.selectedProduct} />
                {/* <Change/> */}
                <Change onChange={this.selectedProduct} products={data} />

            </ div>
        )
    }
}
