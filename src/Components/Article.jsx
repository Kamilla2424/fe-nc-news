import { useEffect, useState, useOptimistic } from "react"
import { useParams } from "react-router-dom"
import { fetchArticleById, fetchCommentsById, postNewComment} from "../../utils"
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

    useEffect(() => {
        fetchArticleById(article_id).then(({article}) => {
            setArticle(article)
        })
        fetchAllComments()
    }, [article_id])


    return (
        <>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <img src={article.article_img_url} width={500}/>
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
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
        {comments.map((comment) => {
            return (
            <Comments comment={comment}/>
            )
        })}
        </div>
        </>
    )
}

export default Article