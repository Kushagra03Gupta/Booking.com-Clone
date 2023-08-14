import React from 'react'
import "../navbar/Navbar.scss"
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">Booking.com</span>
            <div className="navItems">
                <button className="navItem">Register</button>
                <button className="navItem">Sign in</button>
            </div>
        </div>
    </div>
  )
}
