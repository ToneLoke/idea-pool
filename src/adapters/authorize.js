import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Auth } from './apiAdapter'

export default function (BaseComponent, inheritedProps) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }
    componentDidMount () {
      if(!localStorage.getItem('jwt')){
        this.context.router.history.push('/')
      }else{
        Auth.user()
          .then( res => { res})
          .catch( e => {
            const token = { refresh_token: localStorage.getItem('refresh') }
            Auth.refresh(token)
              .then( res => {
                localStorage.setItem('jwt', res.jwt)
              })
            } )
    }
    }
    componentWillUpdate () {
      if(!localStorage.getItem('jwt')){
        this.context.router.history.push('/')
      }
    }
    render(){
      return <BaseComponent  {...this.props} />
    }
  }

  return Authentication
}
