import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/loginReducers'

export default function App() {
  const loggedIn = useSelector( state => state.login )
  const dispatch = useDispatch();

  return (
    <div className='container' style={{maxWidth: 500}}>

      <h1>{ loggedIn.value ? "Member" : "Guest"}</h1><br/>
      <button onClick={() => dispatch(login(true)) }>login</button>
      <button onClick={() => dispatch(logout(false))}>logout</button>
    </div>
  )
}
