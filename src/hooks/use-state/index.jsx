import React from 'react'
import { useState } from 'react';

const StateExample = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>count:{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}

export default StateExample;