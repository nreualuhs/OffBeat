import { useState } from 'react'
import './App.css'
import StartPage from './StartPage.jsx'
import Timer from './TimerPage.jsx'
import StartIntro from './intro.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
 return(
  <Routes>
    <Route path="/" element={<StartIntro />} />
    <Route path="/StartPage" element={<StartPage />} />
    <Route path="/TimerPage" element={<Timer />} />
  </Routes>
 );
 
}

export default App
