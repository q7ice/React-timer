import React from 'react'
import Timer from '../Timer'
import TimeDisplay from '../TimeDisplay'
import ProgressBar from '../ProgressBar'

import './App.scss'

const settings = {
  hours: 0,
  minutes: 0,
  seconds: 10
}

const onTimerComplete = () => console.log('End of Timer!')

function App() {
  return (
    <div className="app-wrapper">
      <Timer
        id="timer-1"
        settings={settings}
        onComplete={onTimerComplete}
        TimeDisplay={TimeDisplay}
        ProgressBar={ProgressBar}
      />
    </div>
  )
}

export default App
