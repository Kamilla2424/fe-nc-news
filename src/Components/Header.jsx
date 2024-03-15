import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fetchTopics } from '../../utils'

const Header = ({username, setTopic}) => {
    const [allTopcis, setAllTopics] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchTopics().then((response) => {
           setAllTopics(response)
        })
    }, [])

    const handleTopic = (event) => {
        setTopic(event.target.value)
        if((event.target.value).length > 0){
            navigate(`/articles?topic=${event.target.value}`)
        }else{
            navigate(`/articles`)
        }
    }

    return (
        <>
        <h1>NC-NEWS</h1>
        <Link to='/articles'>Articles</Link>
        <select onChange={handleTopic}>
            <option value="">Topics</option>
            {allTopcis.map(({slug}) => {
                return (
                    <option value={slug}>{slug}</option>
                )
            })}
        </select>
        <Link to='/profile'>{username}</Link>
        </>
    )
}

export default Header