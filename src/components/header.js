import React from 'react'

const Header = (props) => {
  return (
    <div className='row'>
      <div className='col s10'>
        <p className='header-text'>My Ideas</p>
      </div>
      <div className='col s2'>
        <a className='btn-floating btn-large waves-effect waves-light green ' onClick={props.onAdd} ><i className='material-icons'>add</i></a>
      </div>
      <div className='col s10 offset-s1 divider grey' />
    </div>

  )
}

export default Header
