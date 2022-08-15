import React, { useState } from 'react'
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";




const SeatItem = () => {
    const [isSelected, setSelected] = useState(false)


    const { seats, list } = useSelector((state) => state.seat)
    const dispatch = useDispatch();

    const handleAddToList = (position) => {
        dispatch({ type: "addToList", position })
    }
    const toggleSelect = () => {
        setSelected(!isSelected)

    }
    return (
        <div className='mt-5'>
            {seats.map((seat) => {
                return (
                    <div className="a mt-4" key={seat.row}>

                        <div className='row flex-nowrap w-100 '  >
                            <span className='text-white' style={{ width: "35px" }}>{seat.row}</span>
                            {seat.seats.map((position, index) => {
                                return (
                                    <div key={position.name} className='col-sm-1'>

                                        <button isSelected={isSelected} onClick={() => { handleAddToList(position); toggleSelect() }} >{index + 1}</button>

                                    </div>

                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SeatItem