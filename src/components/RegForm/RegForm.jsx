import React, { useState } from 'react';
import './RegForm.css';
import { checkPasswordMatch, validatePassword } from './validatars';

const RegForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isPasswordValid, setIsPasswordValid] = useState(true);
	const [confirmPassword, setConfirmPassword] = useState('');
	const [passwordMatch, setPasswordMatch] = useState(true);

	const handleNameChange = (e) => {
		const newName = e.target.value;
		setName(newName);
	};

	const handleEmailChange = (e) => {
		const newEmail = e.target.value;
		setEmail(newEmail);
	};

	const handlePasswordChange = (e) => {
		const newPassword = e.target.value;
		setPassword(newPassword);
		setIsPasswordValid(validatePassword(newPassword));
		setPasswordMatch(checkPasswordMatch(newPassword, confirmPassword));
	}

	const handleConfirmPasswordChange = (e) => {
		const newConfirmPassword = e.target.value;
		setConfirmPassword(newConfirmPassword);
		setPasswordMatch(checkPasswordMatch(password, newConfirmPassword));
	};

  const years = Array.from()

	return (
		<div className='section'>
			<h1>Форма регистрации</h1>
			<form>
				<input type='text' placeholder='Имя' onChange={handleNameChange} />
				<input type='email' placeholder='email' onChange={handleEmailChange} />
				<input
					type='password' 
					placeholder='Пароль'
					value={password}
					onChange={handlePasswordChange}
				/>

				{!isPasswordValid && (
					<div className='error-message'>
						Пароль должен состоять из латинских букв и цифр, а также быть не
						менее 8 символов
					</div>
				)}
				{!passwordMatch && (
					<div className='error-message'>Пароли не совпадают</div>
				)}
				<input
					type='password'
					placeholder='Подтвердите пароль'
					value={confirmPassword}
					onChange={handleConfirmPasswordChange}
					style={{ color: passwordMatch ? 'green' : 'red' }}
				/>

				<select value={selectedYear}  onChange={handleYearChange}>
					<option value=''>Дата окончания учебного заведения:</option>
					{years.map((year) => (
						<option key={year.toString()} value={year}>
							{year}
						</option>
					))}
				</select>

				<button type='submit'>Отправить</button>
				<button type='reset'>Очистить форму</button>
			</form>
		</div>
	);
};

export default RegForm;
