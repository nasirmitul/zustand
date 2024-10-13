import React from 'react'

export default function Profile() {
  return (
    <div className='profile-page'>
      <div className="profile-info">
        <div className="input-data">
          <p className='message-title'>Enter Your Info Here -</p>
          <form action="">
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button>submit</button>
          </form>
        </div>
        <div className="show-data">
          <p className='message-title'>Your Provided info are -</p>
          <p className='data'>Name: <span>Abu Al Nasir Mitul</span></p>
          <p className='data'>UserName: <span>Mitul</span></p>
          <p className='data'>Email: <span>Mitul</span></p>
          <p className='data'>Password: <span>Mitul</span></p>
        </div>
      </div>
    </div>
  )
}
