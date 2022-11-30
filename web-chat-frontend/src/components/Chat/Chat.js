import React from 'react'
import { useSelector } from 'react-redux'

const Chat = () => {

  const user = useSelector(state => state.authReducer.user)

  return (
    <>
      <h2>Chat screen</h2>
      <p>Welcome, {user.firstName}</p>
    </>
  )
}

export default Chat