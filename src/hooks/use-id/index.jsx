import { useId, useState } from 'react';

const UseIdExample = () => {
	const emailId = useId();
	const passwordId = useId();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState('');

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.email || !formData.password) {
			setError('Все поля обязательны!');
			return;
		}
		setError('');
		console.log('Авторизация:', formData);
		setFormData({ email: '', password: '' });
		// здесь можно отправить запрос
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='p-4 bg-gray-100 max-w-sm mx-auto rounded'
		>
			<div className='mb-4'>
				<label htmlFor={emailId} className='block text-sm font-medium'>
					Email
				</label>
				<input
					id={emailId}
					name='email'
					type='email'
					value={formData.email}
					onChange={handleChange}
					className='w-full mt-1 p-2 border rounded'
				/>
			</div>

			<div className='mb-4'>
				<label htmlFor={passwordId} className='block text-sm font-medium'>
					Пароль
				</label>
				<input
					id={passwordId}
					name='password'
					type='password'
					value={formData.password}
					onChange={handleChange}
					className='w-full mt-1 p-2 border rounded'
				/>
			</div>

			{error && <p className='text-red-500 text-sm mb-2'>{error}</p>}

			<button
				type='submit'
				className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
			>
				Войти
			</button>
		</form>
	);
};

export default UseIdExample;
