import React from 'react';
import { useState, useEffect } from 'react';
import { getArticleComments } from '../utils/ApiCalls';
import CommentCard from './CommentCard';

export default function Comments({ id }) {
	const [articleComments, setArticleComments] = useState([]);
	const [sortBy, setSortBy] = useState('created_at');
	const sorters = ['created_at', 'votes'];

	useEffect(() => {
		let mounted = true;
		getArticleComments(id).then(comments => {
			if (mounted) {
				setArticleComments(comments);
			}
		});
		return function cleanup() {
			mounted = false;
		};
	});

	return (
		<section>
			<div className='CommentsContainer'>
				{articleComments.map(comment => {
					return <CommentCard key={comment.comment_id} comment={comment} />;
				})}
			</div>
		</section>
	);
}
