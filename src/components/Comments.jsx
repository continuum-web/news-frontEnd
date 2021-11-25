import React from 'react';
import { useState, useEffect } from 'react';
import { getArticleComments } from '../utils/ApiCalls';
import CommentCard from './CommentCard';

export default function Comments({ id }) {
	//console.log(author)
	const [articleComments, setArticleComments] = useState([]);
	useEffect(() => {
		getArticleComments(id).then(comments => {
			setArticleComments(comments);
		}).catch((err) => {
			
		});
		return;
	});

	return (
		<div className='CommentsContainer'>
			{articleComments.map(comment => {
				return <CommentCard key={comment.comment_id} comment={comment}  />;
			})}
		</div>
	);
}
