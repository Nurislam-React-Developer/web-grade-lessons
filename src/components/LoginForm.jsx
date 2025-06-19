const Login = ({handleChange, formData, handleSubmit}) => {
	return (
		<div>
			<h2>Вход</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						value={formData.email || ''}
						onChange={(e) => handleChange('email', e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='password'>Пароль:</label>
					<input
						type='password'
						id='password'
						value={formData.password || ''}
						onChange={(e) => handleChange('password', e.target.value)}
						required
					/>
				</div>
				<button type='submit'>Войти</button>
			</form>
		</div>
	);
};

export default Login;
