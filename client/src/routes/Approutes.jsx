import React, { useContext } from "react"
import { Home } from "../pages/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AddTask } from "../pages/AddTask"
import { Login } from "../pages/login"
import { Signup } from "../pages/Signup"
import { UserContext } from "../contexts/UserContextProvider"

export const Approutes = () => {
  const { user } = useContext(UserContext)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddTask />} />
          {!user && <Route path="/login" element={<Login />} />}
          {!user && <Route path="/signup" element={<Signup />} />}
        </Routes>
      </BrowserRouter>
    </>
  )
}
