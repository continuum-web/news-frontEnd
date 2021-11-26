import React from 'react';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import { getArticles } from '../utils/ApiCalls';
import { useParams } from 'react-router';
import PageNotFound from './PageNotFound';

export default function TopicList() {
	const { topic } = useParams();
	const [sortBy, setSortBy] = useState('created_at');
	const [articles, setArticles] = useState([]);
	const [error, setError] = useState(null);
	const sorters = [
		'created_at',
		'votes',
		'title',
		'article_id',
		'topic',
		'author',
		'comment_count',
	];
	useEffect(() => {
		getArticles(sortBy, topic)
			.then(({ articles }) => {
				setArticles(articles);
			})
			.catch(error => {
				const status = error.response.status;
				if (status === 404) {
					setError({ status: 404, msg: 'Oh no did you take a wrong turn' });
				}
			});

		return;
	}, [topic, sortBy]);

	if (error !== null) {
		return <PageNotFound error={error} />;
	} else {
		return (
			<main>
				<div className='ArticleSort'>
					<p>sort by:..</p>
					<br />
					{sorters.map(sorter => {
						return (
							<button
								key={sorter}
								onClick={() => {
									setSortBy(sorter);
								}}>
								{sorter}
							</button>
						);
					})}
				</div>
			<section id='TopicList' className='container'>
				
				{articles.map(article => {
					return <ArticleCard key={article.article_id} article={article} />;
				})}
				</section>
			</main>
				
		);
	}
}
