import React from 'react'
import { Button, Screen } from './styles'
import { useSelector, useDispatch } from "react-redux"
import cn from 'classnames'
import css from './style.module.css'
import SeatItem from './SeatItem'

const Seat = () => {

    const dispatch = useDispatch();

    

    return (

        <div className="w-50">
            <h2 className='text-center text-warning'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h2>
            <span className='d-flex justify-content-center text-white'>Màn hình</span>
            <Screen />

          <SeatItem/>

        </div >
    )
}

export default Seat