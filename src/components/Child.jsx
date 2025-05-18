import React from 'react'
import { useState } from 'react';

const Child = (props) => {
  const [userAge, setUserAge] = useState(18);

  
  return (
		<div>
			<p>age: {userAge}</p>
      <button onClick={() => setUserAge(userAge + 1)}>add age</button>
		</div>
	);
}

export default Child