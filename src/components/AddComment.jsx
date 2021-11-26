import React from 'react';
import { useState, useContext } from 'react';
import { addComment } from '../utils/ApiCalls';
import { userContext } from '../Contexts/UserContext';

export default function AddComment(id) {
	const [newComment, setNewComment] = useState('');
	const { user } = useContext(userContext);

	const handleSubmit = event => {
		event.preventDefault();
		const commentBody = event.target[0].value;
		const commentObj = {
			username: user,
			body: commentBody,
		};
		addComment(id.id, commentObj);
	};

	return (
		<form id='AddCommentForm' onSubmit={handleSubmit}>
			<label htmlFor='comment'>comment:</label>
			<input
				required
				id='commentInput'
				name='comment'
				type='text'
				value={newComment}
				onChange={event => {
					setNewComment(event.target.value);
				}}
			/>
			<button
				id='addCommentBtn'
				className='commentButton'
				type='submit'
				value='Submit'>
				Add Comment
			</button>
		</form>
	);
}
