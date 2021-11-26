import React, { useState } from 'react';
import { upVoteComment } from '../utils/ApiCalls';

export default function ChangeCommentVotes({ comment_id, votes }) {
	const [voteModifier, setVoteModifier] = useState(0);
	const [voted, setVoted] = useState(false);
	const [buttonText, setButtonText] = useState('Vote');
	const upVote = comment_id => {
		setVoteModifier(prevVoteMod => {
			return voteModifier + 1;
		});
		upVoteComment(comment_id);
	};

	return (
		<div>
			
			<button
				className='singlearticleButton'
				onClick={() => {
					if (!voted) {
						
						upVote(comment_id);
						setVoted(true);
						setButtonText('Voted');
					}
				}}>
				{buttonText}
			</button>
		</div>
	);
}
