import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import ArticlesList from './Components/ArticlesList'
import Article from './Components/Article'
import Profile from './Components/Profile'

function App() {
  const [topic, setTopic] = useState('')
  const [username, setUsername] = useState('jessjelly')

  return (
    <>
    <Header username={username} setTopic={setTopic}/>
    <Routes>
      <Route path='/articles' element={<ArticlesList topic={topic}/>}/>
      <Route path='/articles/:article_id' element={<Article username={username}/>}/>
      <Route path='/profile' element={<Profile username={username}/>}/>
    </Routes>
    </>
  )
}

export default App
