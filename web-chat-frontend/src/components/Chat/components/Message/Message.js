import React from 'react'

const Message = ({ user, chat, index, message }) => {
  return (
    <div className={`message`}>
        <div className={message.fromUserId === user.id ? 'owner' : 'other-person'}>
            {
                message.type === 'text'
                ? <p className='m-0'>{ message.message }</p>
                : <img src={message.message} alt='User upload'/>
            }
        </div>
    </div>
  )
}

export default Message