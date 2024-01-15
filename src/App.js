import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout} from './store/actions'

export default function App() {
  const logged = useSelector(state => state.loggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{logged ? "Member" : "Guest"}</h1>
      <button onClick={() => dispatch(login(true))}>Login</button>
      <button onClick={() => dispatch(logout(false))}>Logout</button>
    </div>
  )
}
