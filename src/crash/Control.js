import React, {useState} from 'react'
import ManualCrash from './ManualCrash'
import AutoCrash from './AutoCrash'

export default function Control() {
    const [ isManual, setIsmanual ] = useState(true)
    const [ displayContent, setDisplayContent ] = useState(<ManualCrash />)

const handleNavigation = ((e)=>{
    if(e === 1){
        setDisplayContent(<ManualCrash />)
        setIsmanual(true)
    }else{
        setIsmanual(false)
        setDisplayContent(<AutoCrash />)
    }
})

  return (
    <div className="crash-controller">
        <div className="crash-controller-container">
            <div className="crash-controller-nav">
                <div className="crash-controller-nav-container">
                    <div onClick={()=>handleNavigation(1)} className="crash-controller-nav-content">
                        <span className={isManual ?'active' : ""} >Manual</span>
                    </div>
                    <div onClick={()=>handleNavigation(2)} className="crash-controller-nav-content">
                        <span className={isManual ? '' : "active"}>Auto</span>
                    </div>
                </div>
            </div>
            {displayContent}
        </div>
    </div>
  )
}
