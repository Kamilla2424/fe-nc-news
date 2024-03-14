import { useState } from "react"

const Comments =  ({comment}) => {
    return (
        <ul className="comment-list">
            <li className="comment" key={comment.comment_id}>
                <p className="comment-author">@{comment.author}</p>
                <p className="comment-body">{comment.body}</p>
                <p className="comment-date">{comment.created_at}</p>
            </li>
            </ul>
    )
}

export default Comments