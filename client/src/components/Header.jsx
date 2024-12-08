import React from "react"
import { NavLink } from "react-router-dom"

export const Header = () => {
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
        </nav>
      </div>
    </header>
  )
}
