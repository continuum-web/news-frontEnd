import React from 'react'
import '../styles/comments.css'

    
export default function CommentCard({ comment}) {
    return (
        <div className="CommentCard">
            
            <p className="commentBody">{comment.body}</p>
            <p className="commentAuthor">{comment.author}</p>
            <div className="commentsVoteSection">
                <p className="commentVotes">Votes: {comment.votes}</p>
                <button className="commentButton">Up Vote</button></div>
            
        </div>
    )
}
