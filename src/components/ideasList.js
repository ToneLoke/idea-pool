import React, {Component} from 'react'
import Editable from './editableIdea'
import Idea from './ideaShow'
class ideasList extends Component {

  createIdeasList () {
    console.log(this.props.ideas)
    return this.props.ideas.map((idea, i) => {
      // render for component or show
      if (idea.edit) {
        return <li key={i}><Editable {...idea} /></li>
      } else {
        return <li key={i}><Idea {...idea} /></li>
      }
    })
  }

  render () {
    return (
      <ul>
        <li>
          <div className='row'>
            <div className='col s1 offset-s6'>Impact</div>
            <div className='col s1 '>Ease</div>
            <div className='col s1 '>Confidence</div>
            <div className='col s1 '>Avg</div>
          </div>
        </li>
        {this.createIdeasList()}
      </ul>
    )
  }

}

export default ideasList
