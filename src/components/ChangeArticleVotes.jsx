import React, { useState } from 'react';
import { upVoteArticle } from '../utils/ApiCalls';

export default function ChangeArticleVotes({ article_id, votes }) {
	const [voteModifier, setVoteModifier] = useState(0);
	const [voted, setVoted] = useState(false)
	const [buttonText, setButtonText] = useState("Vote")
	const upVote = article_id => {
		setVoteModifier(votesModifier => {
			return votesModifier;
		});
		upVoteArticle(article_id);
	};

	return (
		<div>
			<span className='singlearticleVotes'>Votes: {votes + voteModifier}</span>
			<button
				className='singlearticleButton'
				onClick={() => {
					if (!voted) {
						setVoteModifier(voteModifier => {
							return voteModifier + 1;
						});
						upVote(article_id);
						setVoted(true)
						setButtonText('voted')
					} 					
				}}>
				{ buttonText}
			</button>
		</div>
	);
}
