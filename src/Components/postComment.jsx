import { useState } from "react"
import { postNewComment } from "../../utils"
import { useParams } from "react-router-dom"

const postComment = () => {
    const {article_id} = useParams()

    const handleSubmit = (event) => {
        event.preventDefault()
        postNewComment(article_id, newComment)
    }

}

export default postComment