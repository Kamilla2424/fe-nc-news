import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://nc-news-ku4r.onrender.com'
})

export const fetchArticles = () => {
    return newsApi.get('api/articles')
    .then((response) => {
        return response.data
    })
}

export const fetchArticleById = (article_id) => {
    return newsApi.get(`api/articles/${article_id}`)
    .then((response) => {
        return response.data
    })
}

export const fetchCommentsById = (article_id) => {
    return newsApi.get(`api/articles/${article_id}/comments`)
    .then((response) => {
        return response.data
    })
}

export const updateVotesById = (article_id, inc_votes) => {
    return newsApi.patch(`api/articles/${article_id}`, {inc_votes: inc_votes})
    .then((response) => {
        return response.data
    })
}
