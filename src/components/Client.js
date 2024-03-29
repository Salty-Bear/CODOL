import React from 'react'
import Avatar from 'react-avatar';


export const Client = ({username}) => {
  return (
    <div className='Client' >
        <Avatar name = {username} size = {50} round="14px"  />
        <span className='userName'>{username}</span>
    </div>
  )
}

