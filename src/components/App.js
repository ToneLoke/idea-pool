import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Nav from './nav'
import IdeaContainer from './ideaContainer'
import Authorize from '../adapters/authorize'
import {Auth} from '../adapters/apiAdapter'
import Login from './loginForm'
import SignUp from './signUp'
import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
    user: {}
  }
  getUser(loginParams){
    Auth.login(loginParams)
      .then( res => {
          localStorage.setItem('jwt', res.jwt)
          localStorage.setItem('refresh', res.refresh_token)
      })
      .then(Auth.user)
      .then( user => {
        this.setState({isLoggedIn: true, user: user})
      })
      .catch( err => console.log('error from server', err))
  }
  onLogin(loginParams){
    if(loginParams.name){
      Auth.signUp(loginParams)
        .then(res => {
            localStorage.setItem('jwt', res.jwt)
            localStorage.setItem('refresh', res.refresh_token)
        })
        .then(Auth.user)
        .then( user => {
          this.setState({isLoggedIn: true, user: user})
        })
        .catch( err => console.log('error from server', err))
    }else{
      this.getUser(loginParams)
    }
  }
  handleLogout(){
    localStorage.clear()
    this.setState({
      isLoggedIn:false,
      user: {}
    })
  }

  componentDidMount(){
    if(localStorage.getItem('jwt')){
      Auth.user()
        .then(user => {
          this.setState({isLoggedIn: true, user: user})
        })
        .catch( e => {
          console.log(e);
        })
    }
  }

  render () {
    return (
      <Router>
        <div className="row">
          <div className="col s2 green full-length"><Route path='/' render={()=> <Nav info={this.state} onLogout={this.handleLogout.bind(this)} /> } /></div>
          <div className="col s10 full-length">
            <Route path='/ideas' component={Authorize(IdeaContainer)} />
            <Route exact path='/' render={()=> this.state.isLoggedIn ? <Redirect to="/ideas"/> : <Login onSendLogin={this.onLogin.bind(this)}/> } />
            <Route path='/signUp' render={()=> this.state.isLoggedIn ? <Redirect to="/ideas"/> : <SignUp onSendLogin={this.onLogin.bind(this)}/> } />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
