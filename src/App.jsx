import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
	const [loginData, setLoginData] = useState({});
  const handleLoginChange = (key, value) => {
    setLoginData({...loginData, [key]: value});
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Date Form Login', loginData)
  }

	return (
		<div>
			<h1>Авторизация</h1>
			<LoginForm handleChange={handleLoginChange} formData={loginData} handleSubmit={handleLoginChange}/>
			<h1>Регистрация</h1>
			<RegisterForm />
		</div>
	);
};

export default App;
