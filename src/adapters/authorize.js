import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default function (BaseComponent, inheritedProps) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }
    componentDidMount () {
      if(!localStorage.getItem('jwt')){
        this.context.router.history.push('/login')
      }
    }
    componentWillUpdate () {
      if(!localStorage.getItem('jwt')){
        this.context.router.history.push('/login')
      }
    }
    render(){
      return <BaseComponent  {...this.props} />
    }
  }

  return Authentication
}
