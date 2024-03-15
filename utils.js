import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://nc-news-ku4r.onrender.com'
})

export const fetchArticles = (topic) => {
    let url = 'api/articles'
    if(topic.length > 0){
        url += `?topic=${topic}`
    }
    return newsApi.get(url)
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

export const deleteComment = (comment_id) => {
    return newsApi.delete(`api/comments/${comment_id}`)
    .then((response) => {
        return response.data
    })
}

export const fetchTopics = () => {
    return newsApi.get('api/topics')
    .then((response) => {
        return response.data
    })
}

export const updateVotesById = (article_id, num) => {
    return newsApi.patch(`api/articles/${article_id}`, {inc_votes: num})
    .then((response) => {
        return response.data
    })
}
