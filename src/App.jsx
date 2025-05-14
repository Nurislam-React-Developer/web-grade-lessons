import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';

function App() {
	return (
		<main className='app'>
			<Header />
			<HomePage />
			<Footer />
		</main>
	);
}

export default App;
