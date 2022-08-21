import React from "react";
import Ticket from "./BT_DatVeXemPhimRedux/Ticket";
import { Routes, Route, Link } from "react-router-dom"
import Success from "./BT_DatVeXemPhimRedux/Success";


function App() {

  return (
    <Routes>
      <Route path='/' element={<Ticket />} />
      <Route path='/Success' element={<Success />} />
      <Route path='*' element={<h1>co cai nit</h1>} />
    </Routes>

  )

};
export default App;
