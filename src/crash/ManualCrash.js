import React from 'react'
import CrashHistory from './CrashHistory'

export default function ManualCrash() {
  return (
    <div className='manual-crash'>
        <div className="manual-corash-container">
            <div className="manaul-control">
              <div className="manual-control-label">
                    <div className="manual-control-label-content">
                        <span>Bet Amount</span>
                    </div>
                    <div className="manual-control-label-content-amount">
                        <span >$82,623,2830.00</span>
                    </div>
                  </div>
              <div className="manaul-control-input">
                <div className="manaul-control-input-content">
                  <div className="input">
                    <input type="number" placeholder='0.00000' />
                  </div>
                  <div className="image">
                      <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                  </div>
                </div>
                <div className="manual-control-btn">
                  <div className="half">
                    <button>½</button>
                  </div>
                  <div className="double">
                    <button>2x</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="manaul-control">
              <div className="manual-control-label">
                    <div className="manual-control-label-content">
                        <span>Cashout At</span>
                    </div>
                  </div>
              <div className="manaul-control-input">
                <div className="manaul-control-input-content">
                  <div className="input">
                    <input type="number" placeholder='0.00' />
                  </div>
                </div>
                <div className="manual-control-btn">
                  <div className="half">
                    <button>-</button>
                  </div>
                  <div className="double">
                    <button>+</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="manaul-control">
              <div className="manual-control-label">
                    <div className="manual-control-label-content">
                        <span>Profit on Win</span>
                    </div>
                    <div className="manual-control-label-content-amount">
                        <span >$0.00</span>
                    </div>
                  </div>
                  <div className="manaul-control-input">
                <div className="manaul-control-input-content-pro">
                  <div className="input">
                    <input type="number" placeholder='0.00000' />
                  </div>
                  <div className="image">
                      <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bet-btn">
                <div className="bet-btn-container">
                    <button>Bet</button>
                </div>
            </div>

            <div className="players-history">
              <CrashHistory />
            </div>
        </div>
    </div>
  )
}
