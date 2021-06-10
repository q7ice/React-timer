import React, { useState } from 'react'

import './Modal.scss'

function Modal({closeModal, setTime, settings}) {
  const [hours, setHours] = useState(+settings.hours || 0)
  const [minutes, setMinutes] = useState(+settings.minutes || 0)
  const [seconds, setSeconds] = useState(+settings.seconds || 0)

  const inputHours = e => {
    let {value} = e.target
    if(value > 23) value = 23
    if(value < 0) value = 0
    setHours(+value)
  }

  const inputMinutes = e => {
    let {value} = e.target
    if(value > 59) value = 59
    if(value < 0) value = 0
    setMinutes(+value)
  }

  const inputSeconds = e => {
    let {value} = e.target
    if(value > 59) value = 59
    if(value < 0) value = 0
    setSeconds(+value)
  }

  const doneHandler = () => {
    setTime(hours, minutes, seconds)
    closeModal()
  }

  return (
    <div onClick={() => closeModal()} className="modal-wrapper">
      <div onClick={e => e.stopPropagation()} className="modal-content">
        <div className="modal-header">
          <span>Edit Timer</span><div onClick={() => closeModal()} tabIndex="1" className="modal-close"></div>
        </div>
        <div className="modal-main">
          <div className="input">
            <label htmlFor="hours">Hours</label>
            <input value={hours + ''} onChange={inputHours} tabIndex="2" id="hours" type="number" />
          </div>
          <div className="input">
            <label htmlFor="minutes">Minutes</label>
            <input value={minutes + ''} onChange={inputMinutes} tabIndex="3" id="minutes" type="number" />
          </div>
          <div className="input">
            <label htmlFor="seconds">Seconds</label>
            <input value={seconds + ''} onChange={inputSeconds} tabIndex="4" id="seconds" type="number" />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={doneHandler} tabIndex="5" className="btn modal-done">Done</button>
        </div>
      </div>
    </div>
  )
}

export default Modal