import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const MyComponent = () => {
  const [count, setCount] = useState(0)

  useEffect(() =>{

  }, [])
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default MyComponent