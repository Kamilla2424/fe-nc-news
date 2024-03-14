import { fetchArticles } from "../../utils"
import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"

const ArticlesList = () => {
    const [allArticles, setAllArticles] = useState([])

    useEffect(() => {
        fetchArticles().then(({articles}) => {
            setAllArticles(articles)
        })
    }, [])
    return (
        <>
        <div>
        {allArticles.map((article) => {
            return (
            <div key={article.article_id}>
                <ArticleCard article={article}/>
            </div> 
            )
        })}
        </div>
        </>
    )
}

export default ArticlesList