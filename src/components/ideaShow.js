import React from 'react'

export default ({content, impact, confidence, ease, average_score, onDelete, id, onEdit}) => {
  const average = Math.ceil(average_score)
  return (
    <div className='row'>
      <div className='col s6'>
        {content}
      </div>
      <div className='col s1'>
        {impact}
      </div>
      <div className='col s1' >
        {ease}
      </div>
      <div className='col s1' >
        {confidence}
      </div>
      <div className='col s1'>
        <span>{ average }</span>
      </div>
      <div className='col s1'>
        <i name='submit' className='material-icons' onClick={() => onEdit(id)}>edit</i>
      </div>
      <div className='col s1'>
        <i name='submit' className='material-icons' onClick={() => onDelete(id)}>delete</i>
      </div>
    </div>

  )
}
