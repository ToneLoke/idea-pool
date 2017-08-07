import React, { Component } from 'react'
import IdeasList from './ideasList'
import Header from './header'
import { Ideas } from '../adapters/apiAdapter'


class IdeaContainer extends Component{
  state = {
    newIdea: {
      "content": "Add content here...",
      "impact": 10,
      "ease": 10,
      "confidence": 10,
      "edit": true
    },
    ideaList: []
  }
  componentDidMount(){
    Ideas.get()
      .then( ideas => {
        this.setState({ideaList: ideas})
      })
  }

  addNewIdea = () => {
    this.setState({ideaList: [ this.state.newIdea ,...this.state.ideaList]})
  }

  submitOrDeleteIdea = (type, idea) =>{
    if(type === 'submit'){
      Ideas.create(idea)
        .then(res => {
          this.setState({ideaList: [res, ...this.state.ideaList.filter((e, i) =>  i !== 0)]})
        })
    }else if( type === 'delete'){
      const ideaList = this.state.ideaList.filter((e, i) =>  i !== 0)
      this.setState({ideaList})
    }
  }

  render(){
    return(
      <div className='container'>
        <Header onAdd={this.addNewIdea} />
        <IdeasList ideas={this.state.ideaList} submit={this.submitOrDeleteIdea} />
      </div>
    )
  }
}
export default IdeaContainer
