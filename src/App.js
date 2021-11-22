import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import Menu from './components/Menu';

function App() {
	return (
		<div className='App'>
			<Header />
			
			<Routes>
				<Route path='/' element={<ArticleList />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
