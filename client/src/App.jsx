import { useState } from "react"
import "./App.css"
import { Approutes } from "./routes/approutes"
import { UserContextProvider } from "./contexts/UserContextProvider"

function App() {
  return (
    <>
      <UserContextProvider>
        <Approutes />
      </UserContextProvider>
    </>
  )
}

export default App
