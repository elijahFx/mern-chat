import React from "react"
import { Route, Routes } from "react-router-dom"
import HomePage from "../src/components/HomePage"
import ChatPage from "../src/components/ChatPage"

function App() {


  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/chats" element={<ChatPage />}/>
    </Routes>
  </div>
  )
}

export default App
