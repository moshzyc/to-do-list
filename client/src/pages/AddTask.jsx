import React, { useState } from "react"
import { Header } from "../components/Header"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const AddTask = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    title: "",
    task: "",
  })

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:3000/list/add", formData)
      console.log(formData)
      navigate("/")
    } catch (err) {
      alert(err)
    }
  }
  return (
    <>
      <Header />
      <main>
        <div className="myContainer">
          <form
            className="m-auto flex w-[350px] flex-col gap-2 rounded-md border-[2px] border-black p-1"
            onSubmit={onSubmit}
            action=""
          >
            <label htmlFor="username">username:</label>
            <input
              type="text"
              id="username"
              className="w-[80%] rounded-md border border-black p-1"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              name="username"
              required
            />
            <label htmlFor="title">title:</label>
            <input
              type="text"
              id="title"
              className="w-[80%] rounded-md border border-black p-1"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              name="title"
            />
            <label htmlFor="task">task:</label>
            <textarea
            id="task"
              className="rounded-md border border-black p-1"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              name="task"
              required
            />
            <button className="blackBtn" type="submit">
              submit
            </button>
          </form>
        </div>
      </main>
    </>
  )
}
