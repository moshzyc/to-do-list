import React from 'react'
import { Home } from '../pages/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AddTask } from '../pages/AddTask'

export const Approutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<AddTask/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
