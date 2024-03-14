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

export const fetchUsers = () => {
    return newsApi.get('api/users')
    .then((response) => {
        return response.data
    })
}

export const postNewComment = (article_id, newComment) => {
    return newsApi.post(`api/articles/${article_id}/comments`, newComment)
    .then((response) => {
        return response.data
    })
}