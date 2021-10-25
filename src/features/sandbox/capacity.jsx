import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';
import { increment, decrement } from './testReducer';

export default function Capacity() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);

  return (
    <>
      <h1>Capacity</h1>
      <h3>The data is: {data} </h3>
      <Button
        onClick={() => dispatch(increment(30))}
        content='Increase'
        color='green'
      />
      <Button
        onClick={() => dispatch(decrement(30))}
        content='Decrease'
        color='red'
      ></Button>
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
        content='View'
        color='teal'
      ></Button>
    </>
  );
}
