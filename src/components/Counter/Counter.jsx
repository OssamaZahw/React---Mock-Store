import React from 'react'
import { useState } from 'react'

function Counter() {
    let [counter, setCounter] = useState(10)

    console.log(counter)

    const increment = () => {
        setCounter(++counter);
    }

    const decrement = () => {
        setCounter(--counter)
    }

  return (
    <div className="container mx-auto text-center mt-5">

        <h2>{counter}</h2>

        <div className='w-50 mx-auto d-flex justify-content-between'>
            <button className='btn btn-primary' onClick={increment}>Increment</button>
            <button className='btn btn-dark' onClick={decrement}>Decrement</button>
        </div>

    </div>
    
  )
}

export default Counter