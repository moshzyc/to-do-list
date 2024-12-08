import React, { createContext, useEffect, useState } from "react"
import axios from "axios"
export const UserContext = createContext()
axios.defaults.withCredentials = true

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log(user)
  }, [user])
  useEffect(() => {
    checkIfUserConnected()
  }, [])

  const checkIfUserConnected = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/user/info")
      setUser(data)
    //   location.reload()
    } catch (err) {}
  }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
