import React from 'react'

const Model = ({ imgURL, selectedProduct }) => {

    return (
        <div className='d-flex flex-row justify-content-around mt-5'>
            <div className='position-relative'>
                <img className='' src="./glassesImage/model.jpg" alt="firstModel" style={{ width: '400px', height: '400px' }} />
                <div className='position-absolute' style={{ bottom: 0, height: "120px", width: "100%", background: "orange", opacity: "0.5" }}>

                </div>
                <div className='position-absolute' style={{ bottom: 0 }}>
                    <p style={{ color: "blue", fontWeight: 900, fontSize: "20px" }}>
                        {selectedProduct.name}
                    </p>
                    <p style={{ color:'white', fontWeight: 600, fontSize: "15px" }}>
                        {selectedProduct.desc}
                    </p>
                </div>
                <img src={imgURL} alt="glassesImage" className='position-absolute' style={{
                    height: '100px', width: '260px', top: " 65px",
                    left: "73px"
                }} />
            </div>
            <img className='' src="./glassesImage/model.jpg" alt="secondModel" style={{ width: '400px', height: '400px' }} />


        </div >
    )
}

export default Model