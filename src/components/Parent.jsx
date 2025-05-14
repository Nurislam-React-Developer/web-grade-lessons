import React from 'react'
import { useState } from 'react';

const ExpensiveComponent = React.memo(({ value }) => {
	console.log('Рендер ExpensiveComponent');
	return <div>{value}</div>;
});

const Parent = () => {
  const [count, setCount ] = useState(0)
  
  return (
		<div>
			<button onClick={() => setCount(count + 1)}>Click{count}</button>
      <p>count: {count}</p>
			<ExpensiveComponent value='static' />
		</div>
	);
}

export default Parent