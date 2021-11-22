import React from 'react';

export default function ArticleCard({article}) {
    const { title, author, body, votes } = article;
    
	return (
		<div className='ArticleCard'>
			<h3 className='articleTitle'>{title}</h3>
			<p className='articleAuthor'>{author}</p>
            <p className='articleBody textOverflowOff'>{ body}
			</p>
			<div className='votes'>
                <span className='articleVotes'>Votes: {votes}</span>
				<button className='articleButton'>Read more...</button>
			</div>
		</div>
	);
}
