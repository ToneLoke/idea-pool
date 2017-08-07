import React from 'react'

export default ({content, impact, confidence, ease}) => {
  const average = ((impact + ease + confidence) / 3)
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
    </div>

  )
}
