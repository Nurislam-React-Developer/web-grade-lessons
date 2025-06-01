import { useEffect } from 'react';
import { useRef } from 'react';

const RefExample = () => {
	const inputRef = useRef();

  const onClick = () => {
    inputRef.current.value = 'Hello, World!';
  }

  useEffect(() => {
    console.log('component rerendered');
    
  }) 
	return (
		<div>
      <button onClick={onClick}>Click Me</button>
			<input type='text' ref={inputRef} />
		</div>
	);
};

export default RefExample;
