import React from 'react'

export default function CrashHistory() {
  return (
    <div className="crash-history">
        <div className="crash-history-header">
            <div className="total-players">
            <span>0</span> Active players 
            </div>
          <div className="total-amount">
              <div className="image">
                <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
              </div>
              <div className="amount">
                  0.00000000
              </div>
          </div>
        </div>
       <div className="crash-history-container">
          <p>No active player</p>
       </div>
    </div>
  )
}
