import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticleById, fetchCommentsById } from "../../utils"

const Article = () => {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchArticleById(article_id).then(({article}) => {
            setArticle(article)
        })
        fetchCommentsById(article_id).then(({comments}) => {
            setComments(comments)
        })
    }, [])

    return (
        <>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <img src={article.article_img_url} width={500}/>
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
        <h3 className="comment-header">Comments:</h3>
        <div className="comment-section">
        {comments.map((comment) => {
            return (
            <ul className="comment-list">
            <li className="comment" key={comment.comment_id}>
                <p className="comment-author">@{comment.author}</p>
                <p className="comment-body">{comment.body}</p>
                <p className="comment-date">{comment.created_at}</p>
            </li>
            </ul>
            )
        })}
        </div>
        </>
    )
}

export default Article