import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import UserInfo from './UserInfo';

const Header = () => {
	const user = useContext(UserContext);
	return (
		<div>
			<h2>Добро пожаловать, {user.name}!</h2>
			<UserInfo />
		</div>
	);
};

export default Header;
