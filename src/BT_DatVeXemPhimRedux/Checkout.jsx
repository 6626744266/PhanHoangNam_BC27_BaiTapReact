import React, { useEffect } from 'react'
import { Button, Square } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const dispatch = useDispatch()
    const handleCheckout = (list) => {
        dispatch({ type: "checkOut", list })
    }

    const { list, total } = useSelector((state) => state.seat)

    if(list.length !==0)

    return (
        <div className='w-50' >
            < h1 className='text-center text-white'> DANH SÁCH GHẾ BẠN CHỌN</h1>
            <div className='ms-5 mt-5'>
                <div className='d-flex align-items-center mb-2'>
                    <Square variant='booked' />
                    <h5 className='ms-4 text-white'> Ghế đã đặt</h5>
                </div>
                <div className='d-flex align-items-center mb-2'>
                    <Square variant='selected' />
                    <h5 className='ms-4 text-white'> Ghế đang chọn</h5>

                </div>
                <div className='d-flex align-items-center mb-2'>

                    <Square variant='available' />
                    <h5 className='ms-4 text-white'> Ghế chưa đặt  </h5>

                </div>


                <div style={{ overflowY: 'scroll', maxHeight: "400px" }}>
                    <table className="table table-bordered my-0" style={{ borderBottom: 0 }}  >
                        <thead >
                            <tr >
                                <th style={{ color: "white", width: "50%" }} scope="col">Số ghế </th>
                                <th style={{ color: "white", width: "50%" }} scope="col">Giá</th>

                            </tr>
                        </thead>

                        {list.map((selectedSeats) => {

                            return (
                                <tbody key={selectedSeats.name} style={{ borderTop: "1px solid white" }}>

                                    <tr >
                                        <td style={{ color: "orange" }}>{selectedSeats.name}</td>
                                        <td style={{ color: "orange" }}>{selectedSeats.price}</td>
                                    </tr>

                                </tbody>

                            )


                        })}
                        <tbody style={{}}>
                            <tr style={{
                                position: "sticky", bottom: 0, borderBottom: 0,
                                // borderTop: "1px solid red",
                                borderLeft: "1px solid white", borderRight: "1px solid white"
                            }}>
                                <td style={{ color: "orange", background: "red", borderBottom: 0 }}>Tổng tiền</td>
                                <td style={{ color: "orange", background: "red", borderBottom: 0 }}>{total}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div >
            <div className='d-flex justify-content-end'>
                <Link to="/Success"><Button variant='book' className='justify-content-center bg-success text-white ' onClick={() => handleCheckout(list)}> Đặt vé</Button></Link>
            </div>


        </div >
    )
    else
    return (
        <div className='w-50' >
        < h1 className='text-center text-white'> DANH SÁCH GHẾ BẠN CHỌN</h1>
        <div className='ms-5 mt-5'>
            <div className='d-flex align-items-center mb-2'>
                <Square variant='booked' />
                <h5 className='ms-4 text-white'> Ghế đã đặt</h5>
            </div>
            <div className='d-flex align-items-center mb-2'>
                <Square variant='selected' />
                <h5 className='ms-4 text-white'> Ghế đang chọn</h5>

            </div>
            <div className='d-flex align-items-center mb-2'>

                <Square variant='available' />
                <h5 className='ms-4 text-white'> Ghế chưa đặt  </h5>

            </div>


            <div style={{ overflowY: 'scroll', maxHeight: "400px" }}>
                <table className="table table-bordered my-0" style={{ borderBottom: 0 }}  >
                    <thead >
                        <tr >
                            <th style={{ color: "white", width: "50%" }} scope="col">Số ghế </th>
                            <th style={{ color: "white", width: "50%" }} scope="col">Giá</th>

                        </tr>
                    </thead>

                    {list.map((selectedSeats) => {

                        return (
                            <tbody key={selectedSeats.name} style={{ borderTop: "1px solid white" }}>

                                <tr >
                                    <td style={{ color: "orange" }}>{selectedSeats.name}</td>
                                    <td style={{ color: "orange" }}>{selectedSeats.price}</td>
                                </tr>

                            </tbody>

                        )


                    })}
                    <tbody style={{}}>
                        <tr style={{
                            position: "sticky", bottom: 0, borderBottom: 0,
                            // borderTop: "1px solid red",
                            borderLeft: "1px solid white", borderRight: "1px solid white"
                        }}>
                            <td style={{ color: "orange", background: "red", borderBottom: 0 }}>Tổng tiền</td>
                            <td style={{ color: "orange", background: "red", borderBottom: 0 }}>{total}</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div >
        <div className='d-flex justify-content-end'>
            <Link to="Success"><Button variant='book' className=' d-none justify-content-center bg-success text-white ' onClick={() => handleCheckout(list)}> Đặt vé</Button></Link>
        </div>


    </div >
    )
}

export default Checkout