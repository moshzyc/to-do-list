import axios from "axios"
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContextProvider"

export const Form = ({ isSignup }) => {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)
  const [formValue, setformValue] = useState({
    username: "",
    password: "",
  })

  const onsubmit = async (e) => {
    e.preventDefault()

    try {
      if (isSignup) {
        await axios.post(`http://localhost:3000/user/signup`, formValue)
        console.log(formValue)
        navigate("/login")
      } else {
        const { data } = await axios.post(
          `http://localhost:3000/user/login`,
          formValue
        )
        navigate("/")
        setUser(data)
        location.reload()
      }
    } catch (err) {
      alert(err)
    }
  }
  return (
    <form
      onSubmit={onsubmit}
      className="m-auto mt-[50px] w-[25%] rounded-lg border border-black p-2"
    >
      <div className="mb-4">
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) =>
            setformValue({
              ...formValue,
              [e.target.name]: e.target.value,
            })
          }
          value={formValue.username}
          className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formValue.password}
          onChange={(e) =>
            setformValue({
              ...formValue,
              [e.target.name]: e.target.value,
            })
          }
          className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit" className="blackBtn w-[100%]">
        {isSignup ? "sign up" : "login"}
      </button>
    </form>
  )
}
