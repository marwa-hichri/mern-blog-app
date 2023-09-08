import React from 'react'
import'./newslettre.css'
import {FiSend} from 'react-icons/fi'

const Newsletter = () => {
  return (
    <div className='containern'>
      <div className='wrappern'>
        <div className='titles'>
          <h5>Want to get the latest updates?</h5>
          <h2>Send us your email and we will do the rest!</h2>
        </div>
        <div className='inputContainern'>
          <input type="email" placeholder='Type email...'/>
          <FiSend className='sendIcon'/>
        </div>
      </div>
    </div>
  )
}

export default Newsletter