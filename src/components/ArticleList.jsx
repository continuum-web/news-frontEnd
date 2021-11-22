import React from 'react';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import { getArticles } from '../utils/ApiCalls';

export default function ArticleList() {
	const [articles, setArticles] = useState([]);
    
	useEffect(() => {
		getArticles().then(({ articles }) => {
			setArticles(articles);
		});
		return;
	}, []);

	return (
		<main id='ArticleList'>
            {articles.map((article) => {
                
                return <ArticleCard key={article.article_id} article={article} />;
			})}
		</main>
	);
}
