import { useState } from "react"
import { fetchUsers } from "../../utils"
import { useNavigate } from 'react-router-dom';

const Profile = ({username}) => {
    const [user, setUser] = useState({})

    fetchUsers().then(({users}) => {
        const rightUser = users.filter((user) => {return user.username === username})
        setUser(rightUser)
    })

    return (
        <>
        <h2>{username}</h2>
        </>
    )
}

export default Profile