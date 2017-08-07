import React, { Component } from 'react'
import IdeasList from './ideasList'
import { Route } from 'react-router-dom'
import Header from './header'


class IdeaContainer extends Component{
  state = {
    newIdea: {
      "content": "",
      "impact": 10,
      "ease": 10,
      "confidence": 10,
      "average": 10,
      "edit": true
    },
    ideaList: []
  }
  // fetchIdeas(){
  //   fetch(``)
  //     .then( res => res.json() )
  //     .then( jsonRes => {
  //       this.setState({
  //       })
  //     })
  // }

  componentDidMount(){
    console.log("mounting")
  }

  addNewIdea = () => {
    console.log("adding new idea", this.state.ideaList)
    this.setState({ideaList: [this.state.ideaList, this.state.newIdea]})
  }

  changeToForm = (idea) =>{
    console.log("changing giph", idea)
    this.setState({currentIdea: idea})
  }

  render(){
    return(
      <div className='container'>
        <Header onAdd={this.addNewIdea} />
        <IdeasList ideas={this.state.ideaList} />
      </div>
    )
  }
}
export default IdeaContainer
