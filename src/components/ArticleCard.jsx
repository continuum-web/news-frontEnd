import React from 'react';
import { Link } from 'react-router-dom';

export default function ArticleCard({article}) {
    const { title, author, body, votes, article_id, topic } = article;
    
	return (
		<div className='ArticleCard'>
			<h3 className='articleTitle'>{title}<span className="articleTopic"> ~ { topic}</span></h3>
			
			<p className='articleAuthor'>{author}</p>
            <p className='articleBody textOverflowOff'>{ body}
			</p>
			<div className='votes'>
                <span className='articleVotes'>Votes: {votes}</span>
				<Link to={`/articles/${article_id}`} className='articleButton'>Read more...</Link>
			</div>
		</div>
	);
}
