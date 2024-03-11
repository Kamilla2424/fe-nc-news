import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
        <h1>NC-NEWS</h1>
        <Link to='/'>Home</Link>
        <Link to='/articles'>Articles</Link>
        <Link to='/login'>Login</Link>
        </>
    )
}

export default Header