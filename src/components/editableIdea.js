import React, { Component } from 'react'

export default class EditableIdea extends Component {
  state = {
    "content": "",
    "impact": 10,
    "ease": 10,
    "confidence": 10
  }

  componentDidMount(){
    if(this.props.idea) this.setState(this.props.idea)

  }

  handleChange = (e) => {
    if(e.target.type === 'number'){
      this.setState({
        [e.target.name]: parseInt(e.target.value)
      })
    }else{
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  handleSubmit = (e) => {
    console.log('sending',e)
    if(e === 'submit' ) console.log('submit')
    if(e === 'delete') console.log('delete')
    // this.props.sendIdea(this.state)
  }

  render () {
    // get average of 3 categories
    const average = Math.ceil(parseInt(((this.state.impact + this.state.ease + this.state.confidence) / 3)))
    return (
      <div className='row'>
        <form>
          <div className='col s6'>
            <input name="content" value={this.state.content} id="content" type="text" className="validate" onChange={this.handleChange}/>
          </div>
          <div className='col s1'>
            <input name="impact" value={this.state.impact} id="impact" type="number" className="validate" onChange={this.handleChange}/>
          </div>
          <div className='col s1' >
            <input name="ease" value={this.state.ease} id="ease" type="number" className="validate" onChange={this.handleChange}/>
            </div>
          <div className='col s1' >
            <input name="confidence" value={this.state.confidence} id="confidence" type="number" className="validate" onChange={this.handleChange}/>
            </div>
            <div className='col s1'>
              <span>{ average }</span>
            </div>
          <div className='col s1'>
            <i name='submit' className="material-icons" onClick={ () => this.handleSubmit('submit') }>check</i>
          </div>
          <div className='col s1'>
            <i name='delete' className="material-icons" onClick={ () => this.handleSubmit('delete') }>close</i>
          </div>
        </form>
      </div>
    )
  }
}
