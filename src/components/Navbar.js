import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
     <div className="navbar-container">
        <div className="logo">
            <div className="logo-container">
                <h3>BORCELLE</h3>
            </div>
        </div>
        <div className="search-box">
            <div className="search-container">
                <div className="input-container">
                    <input type="text" placeholder='Search...' />
                </div>
            </div>
        </div>
        <div className="login">
            <button>Login</button>
        </div>
        <div className="Signup">
            <button>Signup</button>
        </div>
    </div>
    </div>
  )
}
