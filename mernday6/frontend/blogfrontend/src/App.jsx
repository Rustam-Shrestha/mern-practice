import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
    </>
  )
}

export default App
