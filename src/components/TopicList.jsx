import React from 'react';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import { getArticlesByTopic } from '../utils/ApiCalls';
import { useParams } from 'react-router';

export default function TopicList() {
	
	const {topic} = useParams()
	console.log(topic)
	const [articles, setArticles] = useState([]);
    
	useEffect(() => {
	
		getArticlesByTopic(topic).then(({ articles }) => {
		console.log(articles)
			setArticles(articles)
		})
		
		return;
	}, [topic]);


	return (
		<main id='TopicList'>
		
			{articles.map((article) => {
				
					return <ArticleCard key={article.article_id} article={article} />;
				
				
			})}
			
		</main>
	)
}