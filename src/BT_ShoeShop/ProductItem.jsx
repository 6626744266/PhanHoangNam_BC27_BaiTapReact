import React from 'react'
import Button from 'react-bootstrap/Button';
import Modall from './Modal'
import App from './Modal'


const ProductItem = ({ item, onSelect, onAdd }) => {
    const [modalShow, setModalShow] = React.useState(false);

    const handleSelect = (selectedItem) => {
        onSelect(selectedItem)

    }
    const handleAddToCart = (selectedItem) => {
        onAdd(selectedItem )
    }

    return (
        <>
            <div>
                <div className="card w-75 mb-5 mx-auto">
                    <img src={item.image} alt="" width="100%" height='300px' />
                    <div className="card-body">
                        <h3 className="card-title" style={{ fontSize: '24px' }}>
                            {item.name}
                        </h3>
                        <h2>{item.price}$</h2>
                        <div className="card-btn d-flex justify-content-between">
                            <button className="btn btn-dark" onClick={() => handleSelect(item)

                            }>

                                Details
                            </button>
                            <button className="btn btn-success" onClick={() => handleAddToCart(item)}>
                                Add to Cart

                            </button>
                        </div>
                    </div>
                </div>
            </div >





        </>)
}


export default ProductItem