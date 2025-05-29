import { useEffect, useState } from 'react';

export const Home = () => {
	const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/posts'
				);
				const result = await response.json();
				setData(result);
			} catch (error) {
				console.error('Error fetching data:', error);
			}finally {
        setIsLoading(false)
      }
		};

		fetchData();
	}, []);

  if(isLoading) {
    return <div>Loading...</div>;
  }

	return (
		<div>
			<ul>
				{data.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
      <p>count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
		</div>
	);
};
