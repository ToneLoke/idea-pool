import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Nav from './nav'
import IdeaContainer from './ideaContainer'
import Auth from '../adapters/authorize'
import AuthAdapter from '../adapters/authAdapter'
import Login from './loginForm'
import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
    user: {}
  }
  onLogin(loginParams){
    AuthAdapter.login(loginParams)
      .then( res => {
          localStorage.setItem('jwt', res.jwt)
          this.setState({ isLoggedIn: true })
      })
      .catch( err => console.log('error from server', err))
  }
  handleLogout(){
    localStorage.clear()
    this.setState({
      isLoggedIn:false,
      user: {}
    })
  }

  render () {
    return (
      <Router>
        <div className="row">
          <div className="col s2 green full-length"><Route path='/' render={()=> <Nav onLogout={this.handleLogout.bind(this)} /> } /></div>
          <div className="col s10 full-length">
            <Route path='/ideas' component={Auth(IdeaContainer)} />
            <Route path='/login' render={()=> this.state.auth.isLoggedIn ? <Redirect to="/ideas"/> : <Login onSendLogin={this.onLogin.bind(this)}/> } />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
