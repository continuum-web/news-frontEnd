import React from 'react'
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getSingleArticle } from '../utils/ApiCalls';
import '../styles/singleArticle.css';
import Comments from './Comments';

export default function SingleArticle() {
    const { id } = useParams()
    
    const [singleArticle, setSingleArticle] = useState({})
    
    useEffect(() => {
        getSingleArticle(id).then((article) => {
            
            setSingleArticle(article)

        });
        return
    }, [])
    
    const { title, body, votes, author} = singleArticle
    console.log(singleArticle)
    return (
			<div className='singlearticle'>
				<h4 className='singlearticleHeading'>{title}</h4>
				<p className='singlearticleAuthor'>{author}</p>
            <p className='singlearticleBody'>{body}</p>
            <div className="sAVotesContainerer">	<span className='singlearticleVotes'>Votes: {votes}</span>
				<button className='singlearticleButton'>Add Vote</button></div>
            <Comments id={ id} />
			</div>
		);
}
