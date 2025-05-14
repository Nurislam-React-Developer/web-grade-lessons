import { useState } from 'react';

const MyComponents = ({ count = 0, increment }) => {
	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={increment}>Increment</button>
		</div>
	);
};

function withCounter(MyComponents, initialCount = 0) {

  function withCounterComponents(props) {
    const [count, setCount] = useState(props.initialCount || initialCount)

    const increment = () => {
      setCount(count + 1)
    }

    return <MyComponents count={count} increment={increment} {...props} />
  }

  return withCounterComponents
}


const EnhancedComponent = withCounter(MyComponents, 10) 

export default EnhancedComponent;