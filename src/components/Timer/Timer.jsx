import React, { useState, useRef } from 'react'
import Modal from '../Modal'
import {calculateSeconds, convertSeconds, calculateProgress} from './Util'

import './Timer.scss'

function Timer({settings, onComplete, TimeDisplay, ProgressBar}) {
  const [currentSettings, setCurrentSettings] = useState(settings)
  const [secondsLeft, setSecondsLeft] = useState(calculateSeconds(settings))
  const [isPause, setIsPause] = useState(true)
  const [isEdit, setIsEdit] = useState(false)

  const intervalID = useRef(null)

  const setTime = (hours, minutes, seconds) => {
    const time = {hours, minutes, seconds}
    setCurrentSettings(time)
    setSecondsLeft(calculateSeconds(time))
  }

  const startHanler = () => {
    if(isPause) {
      const intervalTick = () => {
        setSecondsLeft(seconds => {
          if(seconds > 0) return seconds - 1
          clearInterval(intervalID.current)
          setIsPause(true)
          onComplete()
          return seconds
        })
      }
      intervalID.current = setInterval(intervalTick, 1000)
    } else {
      clearInterval(intervalID.current)
      intervalID.current = null
    }
    setIsPause(isPause => !isPause)
  }

  const resetHandler = () => {
    clearInterval(intervalID.current)
    intervalID.current = null
    setIsPause(true)
    setSecondsLeft(calculateSeconds(currentSettings))
  }

  return (
    <div>
      <div onClick={() => setIsEdit(true)} className="content-center">
        <TimeDisplay {...convertSeconds(secondsLeft)}/>
      </div>
      <div className="timer__buttons content-center">
        <button 
          className="btn btn-start timer__btn"
          onClick={startHanler}
        >
          {isPause ? "Start" : "Pause"}
        </button>
        <button 
          className="btn btn-reset timer__btn"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
      <div className="content-center">
        <ProgressBar value={calculateProgress(secondsLeft, currentSettings)}/>
      </div>
      {isEdit && 
      <Modal 
        closeModal={() => setIsEdit(false)}
        setTime={setTime}
        settings={currentSettings}
      />}
    </div>
  )
}

export default Timer