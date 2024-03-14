import { useEffect, useState } from "react"
import { deleteComment } from "../../utils"

const Comments =  ({comment, username, onDelete}) => {
    
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
            </li>
            </ul>
    )
}

export default Comments