import React from 'react'
import logo from '../logo.png'

export default (props) => {
  return (
    <div className='center green'>
      <ul>
        <li ><img className='responsive-img' src={logo} /></li>
        <li className='logo-text'> The Idea Pool </li>
      </ul>
      <div className='divider' />
      <ul>
        <li ><img className='responsive-img' src={logo} /></li>
        <li className='logo-text'> Name Here </li>
        <li onClick={props.onLogout}>Logout</li>
      </ul>

    </div>

  )
}
