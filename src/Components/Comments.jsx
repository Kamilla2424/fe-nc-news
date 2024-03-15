import { useEffect, useState } from "react"
import { deleteComment } from "../../utils"

const Comments =  ({comment, username, onDelete, error}) => {
    
    const handleSubmit = () => {
        onDelete(comment.comment_id)
    }

    return (
        <ul className="comment-list">
            <li className="comment">
                <p className="comment-author">@{comment.author}</p>
                <p className="comment-body">{comment.body}</p>
                <p className="comment-date">{comment.created_at}</p>
                {comment.author === username ? <button onClick={handleSubmit}>Delete</button> : ''}
                {error && error.comment_id === comment.comment_id ? <p>Failed to delete. Please try again</p> : ''}
            </li>
            </ul>
    )
}

export default Comments