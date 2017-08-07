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
      { props.info.isLoggedIn ? <ul><li ><img className='responsive-img' src={props.info.user.avatar_url} /></li><li className='logo-text'> {props.info.user.name}</li><li onClick={props.onLogout}>Logout</li></ul> : null }
    </div>

  )
}
