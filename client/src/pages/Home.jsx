import React, { useContext, useEffect, useState } from "react"
import { Header } from "../components/Header"
import axios from "axios"
import { Task } from "../components/Task"
import { Edit } from "../components/edit"
import { UserContext } from "../contexts/UserContextProvider"

export const Home = () => {
  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(null)
  const { user } = useContext(UserContext)

  useEffect(() => {
    fetchTasks()
  }, [user])
  async function fetchTasks() {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/list/${user.username}`
      )
      setTasks(data)
    } catch (err) {
      console.error(err)
    }
  }
  // console.log(tasks)
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id))
  }
  const tasksGenerator = (arr) => {
    const tasksArr = arr.map((item) => {
      return (
        <Task
          key={item._id}
          title={item.title}
          task={item.task}
          completed={item.completed}
          id={item._id}
          onDelete={deleteTask}
          onEdit={() => setEditTask(item)}
        />
      )
    })
    return tasksArr
  }
  return (
    <>
      <Header />
      <main>
        <div className="myContainer">{tasksGenerator(tasks)}</div>
        {!tasks.length && (
          <h2 className="m-auto mt-52 w-[60%] rounded-md border border-black p-4 text-center text-8xl text-red-600">
            no task yet
          </h2>
        )}
        {editTask && (
          <Edit
            title={editTask.title}
            task={editTask.task}
            id={editTask._id}
            onClose={() => setEditTask(null)}
            refreshTasks={fetchTasks}
          />
        )}
      </main>
    </>
  )
}
