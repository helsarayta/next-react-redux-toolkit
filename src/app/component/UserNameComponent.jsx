import React from 'react'
import { useSelector } from 'react-redux'
const UserNameComponent = () => {
    const userName = useSelector((state) => state.users.users)
  return (
    <div>
        <h1>UserNameComponent</h1>
        {
            userName.map((data, idx) => <p key={idx}>{data.username}</p>)
        }
        </div>
  )
}

export default UserNameComponent