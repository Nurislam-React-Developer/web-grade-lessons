import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [start, setStart] = useState(false)

  useEffect(() => {
    let time;

    if(start)  {
      time = setInterval(() => {
        setCount((prev) => prev +1)
      }, 1000)
    }

    return () => {
      if(time) {
        clearInterval(time)
      }
    }

  }, [start])
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setStart((s) => !s)}>
        {start ? 'Stop' : 'Start'}
      </button>
    </div>
  )
}

export default App