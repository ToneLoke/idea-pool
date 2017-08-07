import React, {Component} from 'react'
import Editable from './editableIdea'
import Idea from './ideaShow'
class ideasList extends Component {
  state = {
    ideas: []
  }

  createIdeasList(){
    return this.props.ideas.map( i => {
      //render for component or show
      if(i.edit){
        return <Editable {...i}/>
      }else{
        return <Idea {...i} />
      }
    })
  }

  render () {
    return(
      <div>
        {this.createIdeasList()}
      </div>
    )
  }

}

export default ideasList
