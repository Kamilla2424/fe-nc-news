import { Link } from 'react-router-dom'

const Header = ({username}) => {
    return (
        <>
        <h1>NC-NEWS</h1>
        <Link to='/'>Home</Link>
        <Link to='/articles'>Articles</Link>
        {username.length === 0 ?<Link to='/login'>Login</Link>:<Link to='/profile'>{username}</Link>}
        </>
    )
}

export default Header