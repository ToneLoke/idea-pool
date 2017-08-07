import React, { Component } from 'react'

class LoginForm extends Component {
  state = {
      email: '',
      password: ''
  }


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSendLogin(this.state)
    this.setState({username: '', password: ''})
  }

  render () {
    return (
      <div className='row center'>
        <div className='form-text'>Log In </div>
        <form className='col s6 offset-s3' onSubmit={this.handleSubmit}>
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
              <button className='btn green left' type='submit'>LOG IN</button>
              <p className='right'><span>Don't have an account? </span><a>Create an account</a></p>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm
