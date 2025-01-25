import { useState } from 'react'
import './App.css'
import StartPage from './StartPage.jsx'
import Timer from './TimerPage.jsx'
import StartIntro from './intro.jsx'
import JoinGame from './joingame.jsx'
import StartClient from './clientStart.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
 return(
  <Routes>
    <Route path="/" element={<StartIntro />} />
    <Route path="/StartPage" element={<StartPage />} />
    <Route path="/StartClient" element={<StartClient />} />
    <Route path="/TimerPage" element={<Timer textDisplay={"The imposter is..."} />} />
    <Route path="/JoinGame" element={<JoinGame />} />
  </Routes>
 );
 
}

export default App
