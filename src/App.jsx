import Header from './components/Header';
import { UserProvider } from './context/UserContext';
import Home from './pages/Home';

const App = () => {
	// const [user, setUser] = useState({
	// 	name: 'ivan',
	// 	email: 'ivan@gmail.com',
	// });

	// const updateUser = (newUser) => {
	// 	setUser(newUser);
	// };
	return (
		<div>
			<Home />
			<UserProvider>
				<Header />
			</UserProvider>
		</div>
	);
};

export default App;
