import { useState } from 'react'
import './App.css'
import StartPage from './StartPage.jsx'
import Timer from './TimerPage.jsx'

function App() {
 return(
  <>
  <div className="timerpage">
    <Timer textDisplay={"The imposter is..."}></Timer>
  </div> 
  </>
 );
 
}

export default App
