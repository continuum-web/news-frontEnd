import React, { useState } from 'react';
import '../styles/comments.css';
import { deleteComment } from '../utils/ApiCalls';
import { useContext } from 'react';
import { userContext } from '../Contexts/UserContext';
import ChangeCommentVotes from './ChangeCommentVote';

export default function CommentCard({ comment }) {
	const { user } = useContext(userContext);
	const { comment_id } = comment;
	const removeComment = id => {
		deleteComment(id);
	};

	return (
		<div className='CommentCard'>
			<p className='commentBody'>{comment.body}</p>
			<p className='commentAuthor'>{comment.author}</p>
			<div className='commentsVoteSection'>
				<p className='commentVotes'>Votes: {comment.votes}</p>
				<ChangeCommentVotes
					votes={comment.votes}
					comment_id={comment.comment_id}
				/>
			</div>
			<button
				className={
					user === comment.author
						? 'commentDelete commentButton '
						: ' commentDelete disabled commentButton'
				}
				onClick={() => {
					removeComment(comment_id);
				}}>
				delete
			</button>
		</div>
	);
}
