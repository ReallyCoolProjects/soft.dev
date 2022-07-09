import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/header/Header'
import {Routes,Route} from 'react-router-dom'
import Home from './components/pages/home/Home'
import WithNav from './components/RouterConfig/WithNav'

function App() {

  return (
    <div className="App min-h-screen relative font-[Poppins]">
      <Routes>
        <Route element={<WithNav/>}>
    <Route path='/' element={<Home/>} />
        </Route>
    
      </Routes>
    </div>
  )
}

export default App
