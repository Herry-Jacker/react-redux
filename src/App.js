import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store/actionCreators';
import { bindActionCreators } from 'redux';

export default function App() {
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();
  const { add, remove} = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <h1>{account}</h1>
      <button onClick={() => add(50)}>Add</button>
      <button onClick={() => remove(50)}>remove</button>
    </div>
  )
}
