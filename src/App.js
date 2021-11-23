import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import SingleArticle from './components/SingleArticle';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<ArticleList />} />
				<Route path='/articles/:id' element={<SingleArticle/>}/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
