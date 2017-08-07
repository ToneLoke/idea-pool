import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class signUpForm extends Component {
  state = {
      email: '',
      password: '',
      name: ''
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSendLogin(this.state)
  }

  render () {
    return (
      <div className='row center'>
        <div className='form-text'>Sign Up </div>
        <form className='col s6 offset-s3' onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='input-field col s12'>
              <input placeholder='Name' name='name' id='name' type='text' className='validate' onChange={this.handleChange} />
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input placeholder='Email' name='email' id='email' type='email' className='validate' onChange={this.handleChange} />
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input placeholder='Password' name='password' id='password' type='password' className='validate' onChange={this.handleChange} />
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <button className='btn green left' type='submit'>SIGN UP</button>
              <p className='right'><span>Already have an account? </span><Link to='/'>Log In</Link></p>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default signUpForm
