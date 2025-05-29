import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ClickComponents from './ClickComponents'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [countEffect, setCountEffect] = useState(0)
  const [number, setNumber] = useState(0)

  useEffect(() => {
    setCountEffect(countEffect + 1)
  },[number])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>Эффект счетчик: {countEffect}</p>
      <ClickComponents number={number} setNumber={setNumber} count={count}/>
    </div>
  )
}

export default Counter