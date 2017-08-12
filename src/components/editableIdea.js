import React, { Component } from 'react'

export default class EditableIdea extends Component {
  state = {
    idea:{
    "content": "",
    "impact": 10,
    "ease": 10,
    "confidence": 10
  }
  }

  componentDidMount(){
    const idea = this.props.idea
    console.log("form mounting", idea);
    if(this.props.idea) this.setState({idea})
  }

  handleChange = (e) => {
    if(e.target.type === 'number'){
      this.setState({
        idea: {...this.state.idea, [e.target.name]: parseInt(e.target.value)}
      })
    }else{
      this.setState({
        idea: {...this.state.idea, [e.target.name]: e.target.value}
      })
    }
  }

  handleSubmit = (e, id) => {
    console.log('sending',e)
    if(e === 'submit' ) this.props.submit(e,this.state)
    if(e === 'delete') this.props.submit(e,id)
    // this.props.sendIdea(this.state)
  }

  render () {
    // get average of 3 categories
    console.log("rendering edit", this.state.idea);
    const average = Math.ceil(parseInt(((this.state.idea.impact + this.state.idea.ease + this.state.idea.confidence) / 3)))
    return (
      <div className='row'>
        <form>
          <div className='col s6'>
            <input name="content" value={this.state.idea.content} id="content" type="text" className="validate" onChange={this.handleChange}/>
          </div>
          <div className='col s1'>
            <input name="impact" value={this.state.idea.impact} id="impact" type="number" className="num-select center" onChange={this.handleChange}/>
          </div>
          <div className='col s1' >
            <input name="ease" value={this.state.idea.ease} id="ease" type="number" className="num-select center" onChange={this.handleChange}/>
            </div>
          <div className='col s1' >
            <input name="confidence" value={this.state.idea.confidence} id="confidence" type="number" className="num-select center" onChange={this.handleChange}/>
            </div>
            <div className='col s1'>
              <span>{ average }</span>
            </div>
          <div className='col s1'>
            <i name='submit' className="material-icons" onClick={ () => this.handleSubmit('submit') }>check</i>
          </div>
          <div className='col s1'>
            <i name='delete' className="material-icons" onClick={ () => this.handleSubmit('delete', this.state.idea.id) }>close</i>
          </div>
        </form>
      </div>
    )
  }
}
