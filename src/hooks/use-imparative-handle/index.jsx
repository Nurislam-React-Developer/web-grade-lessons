import React from 'react'
import { useImperativeHandle } from 'react';
import { forwardRef } from 'react';
import { useRef } from 'react';

const ImperativeHandleExample = () => {
  const inputRef = useRef()
  return (
    <div>
      <h1>Imperative Handle Example</h1>
      <CustomInput type='text' ref={inputRef}/>
      <button onClick={() => inputRef.current.focusInput()}>Focus INput</button>
      <button onClick={() => inputRef.current.clearInput()}>Clear Input</button>
    </div>
  )
}

export default ImperativeHandleExample;

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef()

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus()
    },
    clearInput: () => {
      inputRef.current.value = ''
    }
  }))

  return <input ref={inputRef} type='text' />
})