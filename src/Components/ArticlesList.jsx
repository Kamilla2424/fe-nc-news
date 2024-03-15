import { fetchArticles, fetchTopics } from "../../utils"
import { useEffect, useState } from "react"
import ArticleCard from "./ArticleCard"

const ArticlesList = ({topic}) => {
    const [allArticles, setAllArticles] = useState([])

    useEffect(() => {
        fetchArticles(topic).then(({articles}) => {
            setAllArticles(articles)
        })
    }, [topic])

    return (
        <>
        <div>
        {!topic ? <h3>that category doesn't exist</h3> : ''}
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