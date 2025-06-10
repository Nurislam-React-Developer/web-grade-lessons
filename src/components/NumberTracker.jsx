import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const NumberTracker = () => {
  const [number, setNumber] = useState(0);
  const previousNumber = useRef()

  useEffect(() => {
    previousNumber.current = number
  },[number])
  return (
    <div>
      <h2>Текушая число: {number}</h2>
      <h2>Предудущее число: {previousNumber.current}</h2>
      <button onClick={() => setNumber(number + 1)}>Увеличить число</button>
      <button onClick={() => setNumber(number - 1)}>Уменьшить число</button>
      <button onClick={() => setNumber(0)}>Сбросить число</button>
    </div>
  )
}

export default NumberTracker