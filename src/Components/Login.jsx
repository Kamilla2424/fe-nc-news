import { useState } from "react"
import { fetchUsers } from "../../utils"
import { useNavigate } from 'react-router-dom';

const Login = ({setUsername}) => {
    const [newUsername, setNewUsername] = useState('')
    const [isValidUsername, setIsValidUsername] = useState(true)
    const navigate = useNavigate();

    const handleUsername = (event) => {
        setNewUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchUsers().then(({users}) => {
            const userlist = users.map((userObject) => userObject.username)
            if(userlist.includes(newUsername)){
                setUsername(newUsername)
                setIsValidUsername(true)
                navigate('/articles')
            }else{
                setIsValidUsername(false)
            }
        })
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
            </label>
            <input type="text" onChange={handleUsername}></input>
            <button type="submit">Login</button>
            {!isValidUsername?<p>User doesn't exist</p>: null}
        </form>
        </>
    )
}

export default Login