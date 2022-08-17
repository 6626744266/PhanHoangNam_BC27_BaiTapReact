import React, { useState, useEffect } from 'react'
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Button } from './styles';




const SeatItem = (index) => {
    const [isSelected, setSelected] = useState(false)

    const dispatch = useDispatch()

    const { seats, list } = useSelector((state) => state.seat)




    const handleAddToList = (position) => {
        setSelected(!isSelected)

        dispatch({ type: "handleList", position })

        dispatch({ type: "getTotal", position })


    }
    useEffect(() => {



    }, [list])

    return (

        <Button isSelected={isSelected} isBooked={index.position.booked} onClick={() => { handleAddToList(index.position) }}  > {index.index + 1}

        </Button>


    )
}

export default SeatItem