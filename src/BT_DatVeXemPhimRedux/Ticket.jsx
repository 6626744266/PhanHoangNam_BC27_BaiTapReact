import React from 'react'
import Checkout from './Checkout'
import Seat from './Seat'
// import img from '/public/img/thumb-1920-378546.jpg'
import { Wrapper, Wrapper2 } from './styles'

const Ticket = () => {
  return (
    <Wrapper>
      <div className="container-fluid d-flex" style={{ position: 'relative', zIndex: 1000 }}>
        <Seat />
        <Checkout />
      </div>
      <Wrapper2 />




    </Wrapper>
  )
}

export default Ticket