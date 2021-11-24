import React from 'react';
import { useState, useEffect } from 'react';
import { getArticleComments } from '../utils/ApiCalls';
import CommentCard from './CommentCard';

export default function Comments({ id }) {
	const [articleComments, setArticleComments] = useState([]);

	useEffect(() => {
		getArticleComments(id).then(comments => {
			setArticleComments(comments);
		});
		return () => {};
	}, []);

	return (
		<div className="CommentsContainer">
			{articleComments.map(comment => {
				return <CommentCard comment={comment} />;
			})}
		</div>
	);
}
