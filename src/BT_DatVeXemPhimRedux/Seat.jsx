import React from 'react'
import { Button, Screen } from './styles'
import { useSelector, useDispatch } from "react-redux"
import cn from 'classnames'
import SeatItem from './SeatItem'

const Seat = () => {
    const { seats, list } = useSelector((state) => state.seat)

    const dispatch = useDispatch();



    return (

        <div className="w-50">
            <h2 className='text-center text-warning'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
            <span className='d-flex justify-content-center text-white'>Màn hình</span>
            <Screen />

            <div className='mt-5'>
                {seats.map((seat) => {
                    return (
                        <div className="a mt-4" key={seat.row}>

                            <div className='row flex-nowrap w-100 align-items-center'  >
                                <span className='text-white' style={{ width: "35px" }}>{seat.row}</span>
                                {seat.seats.map((position, index) => {
                                    return (
                                        <div key={position.name} style={{ padding: "0px 8px" }} className='col-sm-1'>
                                            <SeatItem index={index} position={position} />

                                        </div>

                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>

        </div >
    )
}

export default Seat