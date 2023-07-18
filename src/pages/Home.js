import React from 'react'
import Control from '../crash/Control'
import CrashChart from '../crash/CrashChart'
import logo from "../logo.jpg"

export default function Home() {
  return (
    <div className="crash">
        <div className="crash-container">
            <Control />
            <CrashChart />
        </div>
        <div className="crash-footer">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}
