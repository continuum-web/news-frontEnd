import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getSingleArticle } from '../utils/ApiCalls';
import '../styles/singleArticle.css';
import Comments from './Comments';
import PageNotFound from '../components/PageNotFound'
import AddComment from './AddComment'
import ChangeArticleVotes from './ChangeArticleVotes';

export default function SingleArticle() {
	const [singleArticle, setSingleArticle] = useState({});
	const { title, body, votes, author, article_id } = singleArticle;
	const [error, setError] = useState(null);
	

	const { id } = useParams();

	useEffect(() => {
		getSingleArticle(id)
			.then(article => {
				setSingleArticle(article);
			})
			.catch(err => {
			
				setError({ status: 404, msg: 'Oh no did you take a wrong turn' });
			});
		return;
	}, [id]);


	if (error !== null) {
		return <PageNotFound error={error} />;
	} else {
		return (
			<div>
				<div className='singlearticle'>
					<h4 className='singlearticleHeading'>{title}</h4>
					<p className='singlearticleAuthor'>{author}</p>
					<p className='singlearticleBody'>{body}</p>
					<div className='sAVotesContainerer'>
						<ChangeArticleVotes votes={votes} article_id={article_id} />
					</div>
					<AddComment id={id}/>
				</div>
				<Comments key={article_id + Math.random()} id={id} author={author} />
			</div>
		);
	}
}
