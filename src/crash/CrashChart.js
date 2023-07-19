import React from 'react'

export default function CrashChart() {



  return (
    <div className="crash-chart">
        <div className="crash-chart-header">
          <div className="crash-chart-header-container">
              <div className="crash-chart-header-contents">
                <button>3.45x</button>
              </div>
              <div className="crash-chart-header-contents">
                <button className='isLower'>1.45x</button>
              </div>
              <div className="crash-chart-header-contents">
                <button>1.45x</button>
              </div>
              <div className="crash-chart-header-contents">
                <button className='isLower'>5.45x</button>
              </div>
              <div className="crash-chart-header-contents">
                <button> 1.45x</button>
              </div>
              <div className="crash-chart-header-contents">
                <button className='isLower'>{"<"}</button>
                <p>{"<"} You</p>
              </div>
          </div>
        </div>

        <div className="crash-chart-container">
          <canvas></canvas>
        </div>
    </div>
  )
}
