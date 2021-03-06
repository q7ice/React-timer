import React from 'react'

import './ProgressBar.scss'

function ProgressBar({value}) {
  return (
    <div className="progress-wrapper">
      <div className="progress-value" style={{width: `${value}%`}}>
        {/* {value > 15 && <span>{Math.round(value)}%</span>} */}
      </div>
    </div>
  )
}

export default ProgressBar
