import React from 'react';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import { getArticlesByTopic } from '../utils/ApiCalls';
import { useParams } from 'react-router';
import PageNotFound from './PageNotFound';

export default function TopicList() {
	
	const {topic} = useParams()
	
	const [articles, setArticles] = useState([]);
	const [error, setError] = useState(null)
    
	useEffect(() => {
	
		getArticlesByTopic(topic).then(({ articles }) => {
	
			setArticles(articles)
		}).catch(error => {
			
			const status = error.response.status
			if (status === 404) {
				setError({status:404, msg:"Oh no did you take a wrong turn"})
			}
		})
		
		return;
	}, [topic]);

	if (error !== null) {
		return (
			<PageNotFound error={error} />
		)
	} else {
		return (
		<main id='TopicList' className="container">
		
			{articles.map((article) => {
				
					return <ArticleCard key={article.article_id} article={article} />;
				
				
			})}
			
		</main>
	)
	}
	
}