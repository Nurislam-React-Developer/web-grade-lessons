import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserDetails = () => {
	const user = useContext(UserContext);
	// const user = useUserContext();
	return (
		<div>
			<h3>Детали пользвателя: </h3>
			<p>Имя: {user.name}</p>
			<p>Почта: {user.email}</p>
		</div>
	);
};

export default UserDetails;
