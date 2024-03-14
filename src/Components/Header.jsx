import { Link } from 'react-router-dom'

const Header = ({username}) => {
    return (
        <>
        <h1>NC-NEWS</h1>
        <Link to='/'>Home</Link>
        <Link to='/articles'>Articles</Link>
        <Link to='/profile'>{username}</Link>
        </>
    )
}

export default Header