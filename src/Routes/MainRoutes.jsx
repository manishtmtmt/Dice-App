import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dice from '../Pages/Dice'
import Home from '../Pages/Home'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dice' element={<Dice />} />
    </Routes>
  )
}

export default MainRoutes