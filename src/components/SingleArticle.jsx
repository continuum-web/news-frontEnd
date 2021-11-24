import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getSingleArticle } from '../utils/ApiCalls';
import '../styles/singleArticle.css';
import Comments from './Comments';
import { upVoteArticle } from '../utils/ApiCalls';
import PageNotFound  from '../components/PageNotFound'

export default function SingleArticle() {
	const [singleArticle, setSingleArticle] = useState({});
	const { title, body, votes, author, article_id } = singleArticle;
	const [error, setError] = useState(null);
	const [votesState, setVotesState] = useState(15);

	const { id } = useParams();

	const upVote = article_id => {
		setVotesState(prevVoteState => {
			return prevVoteState + 1;
		}).catch(error => {
			console.log(error);
		});
		upVoteArticle(article_id);
	};

	useEffect(() => {
		setVotesState(votes);
		getSingleArticle(id)
			.then(article => {
				setSingleArticle(article);
			})
			.catch(error => {
				setError({ status: 404, msg: 'Oh no did you take a wrong turn' });
			});
		return;
	}, [votes]);


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
						<span className='singlearticleVotes'>Votes: {votesState}</span>
						<button
							className='singlearticleButton'
							onClick={() => {
								upVote(article_id);
							}}>
							Add Vote
						</button>
					</div>
				</div>
				<Comments key={article_id + Math.random()} id={id} />
			</div>
		);
	}
}
