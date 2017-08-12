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
      
      const editedIdeas = this.state.ideaList.map( i => i.id === idea ? {...i, edit: false} : i)
      console.log("go back to a normal idea bro",editedIdeas);
      this.setState({ideaList: editedIdeas})
    }
  }

  deleteIdeaAPI = (id) => {
    Ideas.delete(id)
      .then(res => res)
      .catch( e => e)
  }

  onEditForm = (id) => {
    const editedIdeas = this.state.ideaList.map( i => i.id === id ? {...i, id: i.id, edit: true} : i)
    this.setState({ideaList: editedIdeas})
  }

  render(){
    return(
      <div className='container'>
        <Header onAdd={this.addNewIdea} />
        <IdeasList ideas={this.state.ideaList} submit={this.submitOrDeleteIdea} onDelete={this.deleteIdeaAPI} onEditIdea={this.onEditForm}/>
      </div>
    )
  }
}
export default IdeaContainer
