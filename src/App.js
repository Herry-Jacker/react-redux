import React, { createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store/actionCreators';
import { bindActionCreators } from 'redux';
import TComponent from './component/TComponent';

export default function App() {
  const account = useSelector(state => state.account);
  const users = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { add, remove, insert, drop} = bindActionCreators(actionCreators, dispatch);
  const nameRef = createRef();
  const phoneRef = createRef();

  const addUser = (e) => {
    e.preventDefault();
    insert({
      name: nameRef.current.value,
      phone: phoneRef.current.value
    })
  }

  return (
    <div>
      <h3>Account</h3>
      <h1>{account}</h1>
      <button onClick={() => add(50)}>Add</button>
      <button onClick={() => remove(50)}>remove</button><hr/>

      <h3>Users</h3>
      <ul>
        {
          users.map(user => <li onClick={() => drop(user) }>{user.name}, {user.phone}</li>)
        }
      </ul>
      <form onSubmit={addUser}>
        <input type='name' ref={nameRef} /><br/>
        <input type='phone' ref={phoneRef} /><br/>
        <input type='submit'/>
      </form><br/><hr/>
      <TComponent/>
    </div>
  )
}
