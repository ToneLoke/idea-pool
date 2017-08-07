import React, {Component} from 'react'
import Editable from './editableIdea'
import Idea from './ideaShow'
class ideasList extends Component {

  createIdeasList () {
    console.log(this.props.ideas)
    return this.props.ideas.map((idea, i) => {
      // render for component or show
      if (idea.edit) {
        return <li key={i}><Editable {...idea} submit={this.props.submit} /></li>
      } else {
        return <li key={i}><Idea {...idea} /></li>
      }
    })
  }

  render () {
    return (
      <ul>
        <li>
          <div className='row '>
            <div className='col s1 offset-s6 col-text'>Impact</div>
            <div className='col s1 col-text'>Ease</div>
            <div className='col s1 col-text'>Confidence</div>
            <div className='col s1 col-text'>Avg</div>
          </div>
        </li>
        {this.createIdeasList()}
      </ul>
    )
  }

}

export default ideasList
