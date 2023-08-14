import React from 'react'
import "../mailList/MailList.scss"

export const MailList = () => {
  return (
    <div className='ml'>
      <div className="mlContainer">
        <h1 className="mlTitle">Save time, save money!</h1>
        <span className="mlDesc">Sign up and we'll send the best deals to you</span>
        <div className="mlInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
