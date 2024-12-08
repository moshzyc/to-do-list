import React, { useEffect, useState } from "react"
import { Header } from "../components/Header"
import axios from "axios"
import { Task } from "../components/Task"
import { Edit } from "../components/edit"

export const Home = () => {
  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(null)

  useEffect(() => {
    fetchTasks()
  }, [])
  async function fetchTasks() {
    try {
      const { data } = await axios.get("http://localhost:3000/list/moshe")
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
