import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getUserList from '../redux/actions';

const ListUserComponent = () => {
    const user = useSelector((state) => state.users.users)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserList())
    },[dispatch])

    console.log("USER => ", user)

  return (
    <div>
        <h1>ListUserComponent</h1>
        {
            user.map((data, idx) => <p key={idx}>{data.name}</p>)
        }
        
        </div>
  )
}

export default ListUserComponent