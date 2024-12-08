import React, { useContext, useEffect, useState } from "react"
import { Header } from "../components/Header"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../contexts/UserContextProvider"

export const AddTask = () => {
    const navigate = useNavigate()
      const { user } = useContext(UserContext)

  const [formData, setFormData] = useState({
    username: "",
    title: "",
    task: "",
  })
  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({ ...prevData, username: user.username }))
    } else {
      navigate("/login")
    }
  }, [user, navigate])


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
            <label htmlFor="title">title:</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              className="w-[80%] rounded-md border border-black p-1"
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              name="title"
            />
            <label htmlFor="task">task:</label>
            <textarea
              id="task"
              value={formData.task}
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
