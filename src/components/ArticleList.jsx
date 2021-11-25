import React from 'react';
import ArticleCard from './ArticleCard';
import { useState, useEffect } from 'react';
import { getArticles } from '../utils/ApiCalls';

export default function ArticleList() {
	const [articles, setArticles] = useState([]);
	const [sortBy, setSortBy] = useState('created_at');
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
		getArticles(sortBy).then(({ articles }) => {
			setArticles(articles);
		});
		return;
	}, [sortBy]);

	
	return (
		<div className='container'>
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
			<div className='ArticleList'>
				{articles.map(article => {
					return <ArticleCard key={article.article_id} article={article} />;
				})}
			</div>
		</div>
	);
}
