import React from 'react'

import './TimeDisplay.scss'

function TimeDisplay({hours, minutes, seconds}) {
  // hours > 9 : '' + hours ? '0' + hours
  const textHours = ('0' + hours).slice(-2)
  const textMinutes = ('0' + minutes).slice(-2)
  const textSeconds = ('0' + seconds).slice(-2)
  
  return (
    <span className="time-display">
      {textHours}:{textMinutes}:{textSeconds}
    </span>
  )
}

export default TimeDisplay
