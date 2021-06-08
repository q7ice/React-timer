import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/Timer'
import TimeDisplay from './components/TimeDisplay'

import './reset.css'
import './index.scss'


const settings = {
  hours: 0,
  minutes: 0,
  seconds: 10
}

const onTimerComplete = () => console.log('End of Timer!')
ReactDOM.render(
  <React.StrictMode>
    <div className="app-wrapper">
      <Timer
        id="timer-1"
        settings={settings}
        onComplete={onTimerComplete}
      >
        {TimeDisplay}
      </Timer>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);