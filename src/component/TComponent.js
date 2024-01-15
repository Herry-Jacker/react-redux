import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/actionCreators';

export default function TComponent() {
    const amount = useSelector( state => state.account )
    const dispatch = useDispatch();
    const { add, remove } = bindActionCreators( actionCreators, dispatch);
  return (
    <div>
        {amount}<br/>
        <button onClick={() => add(50)}>Add</button>
        <button onClick={() => remove(50)}>remove</button>
    </div>
  )
}
