const RegisterForm = () => {
	return (
		<div>
			<h2>Регистрация</h2>
			<form>
				<div>
					<label htmlFor='username'>Имя пользователя:</label>
					<input
						type='text'
						id='username'
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='email'>Email:</label>
					<input
						type='email'
						id='email'
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='password'>Пароль:</label>
					<input
						type='password'
						id='password'
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type='submit'>Зарегистрироваться</button>
			</form>
		</div>
	);
};

export default RegisterForm;
