import { Link } from 'react-router-dom'

const ArticleCard = ({article}) => {
    return (
        <Link to={`/articles/${article.article_id}`}>
            <h4>{article.title}</h4>
            <img src={article.article_img_url} width={500}/>
            <p>{article.author}</p>
            <p>{article.created_at}</p>
            <p>{article.votes}</p>
        </Link>
    )
}

export default ArticleCard