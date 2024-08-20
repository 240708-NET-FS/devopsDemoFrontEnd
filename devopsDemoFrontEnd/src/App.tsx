import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Pokemon from './components/Pokemon/Pokemon'
import Trainer from './components/Trainer/Trainer'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <div className="homepage">
      <NavBar />
      {
        <Routes>
        <Route path="/" element={<Pokemon/>}></Route>
        <Route path="/pokemon" element={<Pokemon/>}></Route>
        <Route path="/trainer" element={<Trainer/>}></Route>
      </Routes>   
      }
    </div>         
         
    </BrowserRouter>
    </>
  )
}

export default App
