import React from 'react'
import { useEffect } from 'react'

const ClickComponents = ({number, setNumber, count}) => {

  useEffect(() => {
    setNumber(number + 100)
  }, [count])
  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>Менять число: {number}</button>
    </div>
  )
}

export default ClickComponents