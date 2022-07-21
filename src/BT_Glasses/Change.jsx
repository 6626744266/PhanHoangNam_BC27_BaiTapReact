import React from 'react'

const Change = ({ onChange, products }) => {
    const changeGlasses = (productId) => {
        onChange(productId)
    }



    return (
        <div style={{ width: '1200px', height: '300px', margin: 'auto', alignItems: 'center', background: 'white' }} className='mt-5 d-flex justify-content-start flex-wrap'>
            {products.map((product) => {
                return (
                    <div key={product.id} className="col-lg-2">
                        <div style={{}} className='mx-4' >
                            <img
                                src={product.url}
                                alt={product.name}
                                width="150px"
                                height="100px"
                                onClick={() => changeGlasses(product)}
                                style={{ border: '1px solid #000', }}
                                className='' />


                        </div>
                    </div>
                );
            })};
        </div>
    );


    // return (
    //     <div style={{ width: '1450px', height: '300px', margin: 'auto' }}>
    //         <div>
    //             {products.map((product) => {
    //                 return (
    //                     <div key={product.id} className='d-flex flex-row flex-wrap  mt-5 bg-light justify-content-around '>
    //             })}

    //                         {/* <img src="./glassesImage/g1.jpg" alt="g1" style={{ border: '1px solid #000', width: '150px', height: '80px', marginTop: '20px' }} onClick={() => changeGlasses('v1')} />
    //             <img src="./glassesImage/g2.jpg" alt="g2" style={{ border: '1px solid #000', width: '150px', height: '80px', marginTop: '20px' }} onClick={() => changeGlasses('v2')} />
    //             <img src="./glassesImage/g3.jpg" alt="g3" style={{ border: '1px solid #000', width: '150px', height: '80px', marginTop: '20px' }} onClick={() => changeGlasses('v3')} />
    //             <img src="./glassesImage/g4.jpg" alt="g4" style={{ border: '1px solid #000', width: '150px', height: '80px', marginTop: '20px' }} onClick={() => changeGlasses('v4')} />
    //             <img src="./glassesImage/g5.jpg" alt="g5" style={{ border: '1px solid #000', width: '150px', height: '80px', marginTop: '20px' }} onClick={() => changeGlasses('v5')} />
    //             <img src="./glassesImage/g6.jpg" alt="g6" style={{ border: '1px solid #000', width: '150px', height: '80px', marginTop: '20px' }} onClick={() => changeGlasses('v6')} />
    //             <div className='d-flex w-100'>
    //                 <img src="./glassesImage/g7.jpg" alt="g7" style={{ border: '1px solid #000', width: '150px', height: '80px', marginBottom: '20px', marginRight: '90px', marginTop: '50px', marginLeft: '50px' }} onClick={() => changeGlasses('v7')} />
    //                 <img src="./glassesImage/g8.jpg" alt="g8" style={{ border: '1px solid #000', width: '150px', height: '80px', marginBottom: '20px', marginRight: '90px', marginTop: '50px' }} onClick={() => changeGlasses('v8')} />
    //                 <img src="./glassesImage/g9.jpg" alt="g9" style={{ border: '1px solid #000', width: '150px', height: '80px', marginBottom: '20px', marginRight: '90px', marginTop: '50px' }} onClick={() => changeGlasses('v9')} /></div> */}
    //                     </div>
    //     </div>

}

export default Change