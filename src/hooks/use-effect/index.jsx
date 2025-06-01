import { useState } from 'react';
import { useEffect } from 'react';

const EffectExample = () => {
  const [data, setData] = useState([])
  const [showPedro, setShowPedro] = useState(false);
  
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then(json => setData(json))
      
	}, [])

  useEffect(() => {
    console.log('pedro');
    
  }
  , [showPedro]);

	return (
		<div>
			<h1>Posts</h1>
      <button onClick={() => setShowPedro(!showPedro)}>Pedro</button>
			<ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
		</div>
	);
};

export default EffectExample;
