import React from 'react'
import Modal from '../Modal'

import './Timer.scss'

class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      settings: this.props.settings,
      secondsLeft: this.calulateSecondsLeft(this.props.settings),
      isPause: true,
      isEdit: false,
      intervalID: null
    }
  }

  calulateSecondsLeft = (settings) => {
    return settings.hours * 3600 + settings.minutes * 60 + settings.seconds
  }

  convertSeconds = (secondsLeft) => {
    const time = Math.trunc(secondsLeft)
    const settings = {
      hours: Math.trunc(time / 3600),
      minutes: Math.trunc((time % 3600) / 60),
      seconds: time % 60
    }
    return settings
  }

  setTime = (hours, minutes, seconds) => {
    const settings = {hours, minutes, seconds}
    this.setState({settings})
    this.setState({secondsLeft: this.calulateSecondsLeft(settings)})
  }

  startHanler = () => {
    if(this.state.isPause) {
      const intervalTick = () => {
        if(this.state.secondsLeft > 0)
          this.setState(prev => {return {secondsLeft: prev.secondsLeft - 1}})
        else {
          clearInterval(this.state.intervalID)
          this.setState({isPause: true})
          this.props.onComplete()
        }
      }
      const intervalID = setInterval(intervalTick, 1000)
      this.setState({intervalID})
    } else {
      clearInterval(this.state.intervalID)
      this.setState({intervalID: null})
    }
    this.setState(prev => {return {isPause: !prev.isPause}})
  }

  resetHandler = () => {
    clearInterval(this.state.intervalID)
    this.setState({intervalID: null})
    this.setState({isPause: true})
    this.setState({secondsLeft: this.calulateSecondsLeft(this.state.settings)})
  }

  render() {
    const TimeDisplay = this.props.children
    return (
      <div>
        <div onClick={() => {this.setState({isEdit: true})}} className="content-center">
          <TimeDisplay {...this.convertSeconds(this.state.secondsLeft)}/>
        </div>
        <div className="timer__buttons content-center">
          <button 
            className="btn btn-start timer__btn"
            onClick={this.startHanler}
          >
            {this.state.isPause ? "Start" : "Pause"}
          </button>
          <button 
            className="btn btn-reset timer__btn"
            onClick={this.resetHandler}
          >
            Reset
          </button>
        </div>
        {this.state.isEdit && 
        <Modal 
          closeModal={() => this.setState({isEdit: false})}
          setTime={this.setTime}
          settings={this.state.settings}
        />}
      </div>
    )
  }
}

export default Timer
