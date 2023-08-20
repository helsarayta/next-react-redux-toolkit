import React from 'react'
import { useSelector } from 'react-redux'

const ListEmailComponent = () => {
    const email = useSelector((state) => state.users.users)
  return (
    <div>
        <h1>ListEmailComponent</h1>
        {
            email.map((data,idx) => <p key={idx}>{data.email}</p>)
        }
        
        </div>
  )
}

export default ListEmailComponent