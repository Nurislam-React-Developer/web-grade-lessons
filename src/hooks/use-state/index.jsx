// # 📚 Объяснение React Хуков

// ## 1. useState (use-state.jsx)
// ````javascript
// filepath: /src/hooks/use-state.jsx
import { useState } from 'react';

const StateExample = () => {
	const [count, setCount] = useState(0); // Создаем состояние со значением 0

	return (
		<div>
			<h1>Значение счетчика: {count}</h1>
			<button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>
			<button onClick={() => setCount((prev) => prev - 1)}>Уменьшить</button>
		</div>
	);
};
