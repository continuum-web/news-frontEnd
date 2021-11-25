import React, { useState, useEffect } from 'react';
import { upVoteArticle } from '../utils/ApiCalls';

export default function ChangeArticleVotes({ article_id, votes }) {
	console.log(article_id,votes);

	const [voteModifier, setVoteModifier] = useState(0);
	const [rerender, setRerender] = useState();
	const upVote = article_id => {
		setVoteModifier(votesModifier => {
			return votesModifier ;
		});
		upVoteArticle(article_id);
	};

	return (
		<div>
			<span className='singlearticleVotes'>Votes: {votes + voteModifier }</span>
			<button
				className='singlearticleButton'
				onClick={() => {
					setVoteModifier(voteModifier => {
						return voteModifier + 1;
					});
					upVote(article_id);
				}}>
				Add Vote
			</button>
		</div>
	);
}
