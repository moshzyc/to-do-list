import React, { useState } from "react"
import axios from "axios"

export const Edit = (props) => {
  const [title, setTitle] = useState(props.title)
  const [task, setTask] = useState(props.task)

   const onSubmit = async (e) => {
    e.preventDefault()
     try {
       await axios.put(`http://localhost:3000/list/${props.id}`, {
         title: title,
         task: task,
       })
       props.refreshTasks()

       props.onClose()
     } catch (err) {
       alert(err)
     }
   }
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-[80%] max-w-md rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">Edit Task</h2>
          <form onSubmit={onSubmit} className="flex flex-col">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mb-4 w-full rounded-md border border-black p-2"
            />
            <label htmlFor="task">Task:</label>
            <textarea
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="mb-4 w-full rounded-md border border-black p-2"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={props.onClose}
                className="redBtn"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="greenBtn"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
