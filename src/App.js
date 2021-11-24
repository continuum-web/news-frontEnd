import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ArticleList from './components/ArticleList';
import SingleArticle from './components/SingleArticle';
import TopicList from './components/TopicList';
import PageNotFound from './components/PageNotFound';
import { userContext } from './Contexts/UserContext';
import { useState } from 'react';

function App() {
	const [user, setUser] = useState('grumpy19');
	return (
		<userContext.Provider value={{user, setUser}}>
			<div className='App'>
				<Header />
				<Routes>
					<Route path='/*' element={<PageNotFound />} />
					<Route exact path='/' element={<ArticleList />} />
					<Route exact path='/articles' element={<ArticleList />} />
					<Route path='/articles/:id' element={<SingleArticle />} />
					<Route path='/topic/:topic' element={<TopicList />} />
				</Routes>
				<Footer />
			</div>
		</userContext.Provider>
	);
}

export default App;
