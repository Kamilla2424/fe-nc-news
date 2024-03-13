import { useEffect, useState, useOptimistic } from "react"
import { useParams } from "react-router-dom"
import { fetchArticleById, fetchCommentsById, updateVotesById } from "../../utils"

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
    }, [article_id])

    const handleVote = (article_id, isLike) => {
        let updatedVotes = article.votes

        if(isLike){
            updatedVotes =  article.votes + 1
        }else{
            updatedVotes = article.votes - 1
        }
        setArticle(article => ({...article, votes: updatedVotes}))

        updateVotesById(article_id, updatedVotes).catch((err) => {
            console.log(err)
            setArticle(article => ({...article, votes: article.votes}));
        })
    }
    
    return (
        <>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <img src={article.article_img_url} width={500}/>
        <p>{article.body}</p>
        <p>Votes: {article.votes}</p>
        <button key="like" onClick={() => handleVote(article_id, true)}>Like</button>
        <button key="dislike" onClick={() => handleVote(article_id, false)}>Dislike</button>
        <h3 className="comment-header">Comments:</h3>
        <div className="comment-section">
        <ul className="comment-list">
        {comments.map((comment) => {
            return (
            <li className="comment" key={comment.comment_id}>
                <p className="comment-author">@{comment.author}</p>
                <p className="comment-body">{comment.body}</p>
                <p className="comment-date">{comment.created_at}</p>
            </li>
            )
        })}
        </ul>
        </div>
        </>
    )
}

export default Article