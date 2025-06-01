import React from 'react'
import { useLayoutEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const LayoutEffectExample = () => {
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef()

  useLayoutEffect(() => {
    if(boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth);
    }
  })
  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <div ref={boxRef} style={{width: '10%', height: '80px' , backgroundColor: 'lightblue'}}>
    Resize Me

      </div>
      <p>The Box Width is: {boxWidth}px</p>
    </div>
  )
}

export default LayoutEffectExample;