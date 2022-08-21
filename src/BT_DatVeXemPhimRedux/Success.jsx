import React from 'react'
import { Button, Square } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faRegular } from "@fortawesome/free-solid-svg-icons"

const Success = () => {

  const getRandomInit = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }
  const { totalSuccess, listSuccess } = useSelector((state) => state.seat)

  const sortListSuccess = [...listSuccess].sort((a, b) => a.name > b.name ? 1 : -1)

  const getListSuccess = sortListSuccess.map((seat) => {
    return `${seat.name} `
  })




  return (
    <div className='container'>
      <div className='d-flex justify-content-center ' >
        <FontAwesomeIcon icon={faCircleCheck} style={{ width: '70px', height: '70px', color: 'green' }} />
      </div>

      <h3 className="w-100 text-center mt-5">Chúc mừng bạn đã đặt mua vé thành công. Vui lòng kiểm tra lại thông tin đặt vé dưới đây</h3>
      <div className='d-flex justify-content-start flex-column mt-5 ' >
        <h3>Mã đặt vé: {getRandomInit(111111, 999999)}</h3>
        <h3 >Rạp: X </h3>
        <h3>Thông tin phim: Y</h3>
        <h3>Suất chiếu: Z</h3>
        <h3>Thông tin vé: {getListSuccess}</h3>
        <h3>Tổng cộng: {totalSuccess} </h3>


      </div>
      <Link to="/"><Button variant='book' className='justify-content-center bg-success text-white w-100 ' > Đặt vé khác</Button></Link>
    </div>
  )
}

export default Success