import React from 'react'
import { Square } from './styles'
import { useSelector } from 'react-redux'

const Checkout = () => {

    const { list } = useSelector((state) => state.seat)

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



                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Số ghế </th>
                            <th scope="col">Giá</th>

                        </tr>
                    </thead>

                    {list.map((selectedSeats) => {
                        return (

                                <tbody key={selectedSeats.name}>
                                    <tr>
                                        <td>{selectedSeats.name}</td>
                                        <td>{selectedSeats.price}</td>
                                    </tr>
                                   

                                </tbody>

                        )


                    })}
                </table>



            </div >
        </div >
    )
}

export default Checkout