import React, { Component } from 'react'

import './Modal.scss'

export class Modal extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      hours: this.props.settings.hours || 0,
      minutes: this.props.settings.minutes || 0,
      seconds: this.props.settings.seconds || 0
    }
  }

  inputHandler = e => {
    let {id, value} = e.target
    if(id === 'hours'){
      if(value > 24){
        value = 24
      } else if(value < 0){
        value = 0
      }
    } else {
      if(value > 60){
        value = 60
      } else if(value < 0){
        value = 0
      }
    }
    this.setState({[id]: value})
  }

  doneHandler = () => {
    this.props.setTime(+this.state.hours, +this.state.minutes, +this.state.seconds)
    this.props.closeModal()
  }

  render() {
    return (
      <div onClick={() => this.props.closeModal()} className="modal-wrapper">
        <div onClick={e => e.stopPropagation()} className="modal-content">
          <div className="modal-header">
            <span>Edit Timer</span><div onClick={() => this.props.closeModal()} tabIndex="1" className="modal-close"></div>
          </div>
          <div className="modal-main">
            <div className="input">
              <label htmlFor="hours">Hours</label>
              <input value={this.state.hours} onChange={this.inputHandler} tabIndex="1" id="hours" type="number" />
            </div>
            <div className="input">
              <label htmlFor="minutes">Minutes</label>
              <input value={this.state.minutes} onChange={this.inputHandler} tabIndex="1" id="minutes" type="number" />
            </div>
            <div className="input">
              <label htmlFor="seconds">Seconds</label>
              <input value={this.state.seconds} onChange={this.inputHandler} tabIndex="1" id="seconds" type="number" />
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={this.doneHandler} tabIndex="1" className="btn modal-done">Done</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
