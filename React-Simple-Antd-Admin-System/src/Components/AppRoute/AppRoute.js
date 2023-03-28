import React from 'react'
import {Route, Routes} from 'react-router-dom'
import './AppRoute.css'
import DashBoard from '../../Pages/DashBoard/DashBoard'
import Inventory from '../../Pages/Inventory/Inventory'
import Order from '../../Pages/Order/Order'
import Customer from '../../Pages/Customer/Customer'
import LogOut from '../../Pages/LogOut/LogOut'

const AppRoute = () => {
  return (
  <Routes>
    <Route path="/" element={<DashBoard/>}></Route>
    <Route path="/inventory" element={<Inventory />}></Route>
    <Route path="/orders" element={<Order />}></Route>
    <Route path="/customers" element={<Customer />}></Route>
    <Route path="/logout" element={<LogOut />}></Route>
  </Routes>

  )
}

export default AppRoute