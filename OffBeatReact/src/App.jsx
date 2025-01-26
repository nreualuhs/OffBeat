import { PlayerProvider } from './PlayerContext';
import { useState, useEffect } from 'react'
import './App.css'
import Timer from './TimerPage.jsx'
import StartIntro from './intro.jsx'
import ClientJoin from './clientJoin.jsx'
import ClientWait from './clientWait.jsx'
import ImposterDance from './imposterDance.jsx'
import ImposterWin from './imposterWin.jsx'
import RegularDance from './regularDance.jsx'
import RegularWin from './RegularWin.jsx'
import JoinGame from './joinGame.jsx'
import StartPage from './StartPage.jsx'

import { Route, Routes } from 'react-router-dom'

const socket = new WebSocket('http://localhost:5000')

function App() {

 return(
  <PlayerProvider>
    <Routes>
      <Route path="/" element={<StartIntro />} />
      <Route path="/TimerPage" element={<Timer textDisplay={"The imposter is..."} />} />
      <Route path="/clientWait" element={<ClientWait />} />
      <Route path="/imposterDance" element={<ImposterDance />} />
      <Route path="/imposterWin" element={<ImposterWin />} />
      <Route path="/regularDance" element={<RegularDance />} />
      <Route path="/regularWin" element={<RegularWin />} />
      <Route path="/clientJoin" element={<ClientJoin socket={socket} />} />
      <Route path="/joinGame" element={<JoinGame socket={socket}/>} />
      <Route path="/StartPage" element={<StartPage />} />
    </Routes>
  </PlayerProvider>
 );
 
}

export default App