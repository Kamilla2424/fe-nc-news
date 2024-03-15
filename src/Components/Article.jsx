import { useEffect, useState, useOptimistic } from "react"
import { useParams } from "react-router-dom"
import { fetchArticleById, fetchCommentsById, postNewComment, deleteComment, updateVotesById } from "../../utils"
import Comments from "./Comments"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Article = ({username}) => {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])
    const [showCommentBox, setShowCommentBox] = useState(false)
    const [newComment, setNewComment] = useState({})
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const [votes, setVotes] = useState(0)
    const [voteErr, setVoteErr] = useState('')
    
    const handleAddComment = () => {
        setShowCommentBox(!showCommentBox)
    }

    const handleNewComment = (event) => {
        const body = event.target.value
        setNewComment({username: username, body: body})
        return newComment
    }
    
    
    const fetchAllComments = () => {
        fetchCommentsById(article_id).then(({comments}) => {
            comments.sort((a,b) => {return new Date(b.created_at) - new Date(a.created_at)})
            setComments(comments)
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault
            postNewComment(article_id, newComment).then((response) => {
                const commentsArr = [...comments, response]
                setComments(commentsArr)
                fetchAllComments()
        })
    }
    const handleDeleteComment = (comment_id) => {
        deleteComment(comment_id).then(() => {
            const filteredComments = comments.filter((comment) => {
                return comment.comment_id !== comment_id
            })
            setComments(filteredComments)
        })
        .catch((err) => {
            setError({comment_id: comment_id ,err: err})
        })
    }

    const handleVote = (num) => {
        const newVote = votes + num
        setVotes(newVote)
        updateVotesById(article_id, num).catch((err) => {
            setVotes(votes)
            setVoteErr("Failed to update vote. Please try again :)")
        })
    }

    useEffect(() => {
        fetchArticleById(article_id).then(({article}) => {
            setArticle(article)
            setVotes(article.votes)
        })
        fetchCommentsById(article_id).then(({comments}) => {
            setComments(comments)
        })
    }, [article_id])
    
    return (
        <>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <img src={article.article_img_url} width={460}/>
        <p>{article.body}</p>
        <p>Votes: {votes}</p>
        <button onClick={() => handleVote(1)}>👍</button>
        <button onClick={() => handleVote(-1)}>👎</button>
        {voteErr ? <p>{voteErr}</p> : ''}
        <h3 className="comment-header">Comments:</h3>
        <div onSubmit={handleNewComment}>
            <button onClick={handleAddComment}>Add a Comment</button>
            {showCommentBox && (
            <div onChange={handleNewComment}>
                <input type="text" ></input>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            )}
        </div>
        <div className="comment-section">
        <ul className="comment-list">
        {comments.map((comment) => {
            return (

            <div key={comment.comment_id}>
                <Comments comment={comment} username={username} onDelete={handleDeleteComment} error={error}/>
            </div>
            )
        })}
        </ul>
        </div>
        </>
    )
}

export default Article