import React, { useState } from "react"
import Vi from "../../public/assets/svg/selection-box-on-svgrepo-com.svg"
import noVi from "../../public/assets/svg/media-stop-svgrepo-com.svg"
import axios from "axios"

export const Task = (props) => {
  const [completed, setCompleted] = useState(props.completed)

  const complet = async () => {
    try {
      await axios.put(`http://localhost:3000/list/${props.id}`, {
        completed: !props.completed,
      })
      setCompleted(!completed)
    } catch (err) {
      alert(err)
    }
  }

  const deletHandle = async () => {
    try {
      await axios.delete(`http://localhost:3000/list/${props.id}`)
      props.onDelete(props.id)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="m-auto flex w-[50%] h-fit flex-col rounded-lg border border-black p-2">
      <div className="flex h-6 w-6 text-green-600">
        {completed ? (
          <img src={Vi} alt="Icon" />
        ) : (
          <img src={noVi} alt="Icon" />
        )}
      </div>

      <div className="h-[100%] w-[100%] border-black p-1">
        <h3 className="text-lg font-bold">{props.title}</h3>
        <p>{props.task}</p>
      </div>

      <div className="flex w-full justify-center border-t border-black">
        <div className="flex h-[100%]">
          <div className="h-[100%] border-black">
            <button onClick={complet} className="blackBtn">
              complet
            </button>
          </div>
          <div className="h-[100%] w-[100%] border-black">
            <button className="blackBtn" onClick={props.onEdit}>
              edit
            </button>
          </div>
          <div className="h-[100%] w-[100%] border-black">
            <button className="redBtn" onClick={deletHandle}>
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
