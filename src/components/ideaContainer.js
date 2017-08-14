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
      console.log("submitting new idea", idea)
      if(idea.id){
        Ideas.update(idea.id , idea)
          .then( res => {
            this.setState({ideaList: [res, ...this.state.ideaList.filter((e) =>  e.id !== res.id )]})
          })
      }else{
        Ideas.create(idea)
        .then(res => {
          this.setState({ideaList: [res, ...this.state.ideaList.filter((e, i) =>  i !== 0)]})
        })      
      }
    }else if( type === 'delete'){
      if(idea.id){
        const editedIdeas = this.state.ideaList.map( i => i.id === idea.id ? {...i, edit: false} : i)
        this.setState({ideaList: editedIdeas})
      }
      else{
        const editedIdeas = this.state.ideaList.filter((e, i) =>  i !== 0)
        this.setState({ideaList: editedIdeas})
      }
    }
  }

  deleteIdeaAPI = (id) => {
    Ideas.delete(id)
      .then(res => {
        Ideas.get()
          .then( ideas => {
            this.setState({ideaList: ideas})
          })
      })
      .catch( e => {
        Ideas.get()
          .then( ideas => {
            this.setState({ideaList: ideas})
          })
      })      
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
