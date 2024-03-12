import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticleById } from "../../utils"

const Article = () => {
    const {article_id} = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        fetchArticleById(article_id).then(({article}) => {
            setArticle(article)
        })
    }, [])

    return (
        <>
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <img src={article.article_img_url} width={500}/>
        <p>{article.body}</p>
        <p>{article.votes}</p>
        </>
    )
}

export default Article