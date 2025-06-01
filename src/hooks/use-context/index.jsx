import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

const GlobalContext = createContext(null)

export const ContextExample = () => {
  const [isToggle, setIsToggle] = useState(false)
  return (
		<GlobalContext.Provider value={{isToggle, setIsToggle}}>
			<div>
				<h1>Parent Component</h1>
				<ChildToggle  />
				<ChildDisplay  />
        <ChildComponent/>
			</div>
		</GlobalContext.Provider>
	);
}

const ChildToggle = () => {
  const {setIsToggle} = useContext(GlobalContext)
  return (
    <div>
      <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State</button>
    </div>
  )
}

const ChildDisplay = () => {
  const { isToggle } = useContext(GlobalContext);

  return (
    <div>
      <p>Current State: {isToggle ? 'On' : 'Off'}</p>
    </div>
  )
}


const ChildComponent = () => {
  const {isToggle, setIsToggle} = useContext(GlobalContext)
  return (
    <div>
      <h2>Child Component</h2>
      <p>Current state: {isToggle}</p>
      <button onClick={() => setIsToggle(isToggle + 1)}>Toggle Increment</button>
      <button onClick={() => setIsToggle(isToggle - 1)}>Toggle Decrement</button>
      <button onClick={() => setIsToggle(0)}>Reset</button>
    </div>
  )
}