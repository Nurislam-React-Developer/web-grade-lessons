import { useRef } from 'react'

const Home = () => {
  const inputRef = useRef(null)

  const focusInput = () => {
    if(inputRef.current) {
      inputRef.current.focus()
    }
  }
  return (
    <div>
      <input type='text'  ref={inputRef}/>
      <button onClick={focusInput}>Click</button>
    </div>
  )
}

export default Home