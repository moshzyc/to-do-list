import axios from "axios"
import React, { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContextProvider"

export const Header = () => {
const {user ,setUser}=useContext(UserContext)
const navigate = useNavigate()
  return (
    <header className="bg-slate-500">
      <div className="myContainer text-center">
        <nav className="inline-flex gap-3 rounded-lg border p-2">
          <NavLink to={"/"} className="text-white hover:underline">
            Tasks
          </NavLink>
          <NavLink to={"/add"} className="text-white hover:underline">
            Add-task
          </NavLink>
          {!user&&<NavLink to={"/login"} className="text-white hover:underline">
            login
          </NavLink>}
          {!user&&<NavLink to={"/signup"} className="text-white hover:underline">
            sign-up
          </NavLink>}
          {user&&<button
            onClick={async () => {
              try {       
                await axios.get("http://localhost:3000/user/logout")
                setUser(null)
                navigate("/login")
                location.reload()
              } catch (error) {
                
              }
            }}
            className="redBtn"
          >
            logout
          </button>}
        </nav>
      </div>
    </header>
  )
}
