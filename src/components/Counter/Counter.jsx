import React from 'react'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from '../../redux/slices/counterSlice';

function Counter() {


    const counterGlobal = useSelector(store => store.counter.counter);
    const dispatch = useDispatch();
    const handleIncrement = () => dispatch(increment());
    const handleDecrement = () => dispatch(decrement());

    console.log(counterGlobal)





    // let [counter, setCounter] = useState(10)

    // console.log(counter)

    // const increment = () => {
    //     setCounter(++counter);
    // }

    // const decrement = () => {
    //     setCounter(--counter)
    // }

  return (
    <div className="container mx-auto text-center mt-5">

        <h2>{counterGlobal}</h2>

        <div className='w-50 mx-auto d-flex justify-content-between'>
            <button className='btn btn-primary' onClick={handleIncrement} >Increment</button>
            <button className='btn btn-dark' onClick={handleDecrement} >Decrement</button>
        </div>

    </div>
    
  )
}

export default Counter