import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import ArticlesList from './Components/ArticlesList'
import Article from './Components/Article'
import Login from './Components/Login'

function App() {
  const [username, setUsername] = useState('')

  return (
    <>
    <Header username={username}/>
    <Routes>
      <Route path='/articles' element={<ArticlesList/>}/>
      <Route path='/articles/:article_id' element={<Article username={username}/>}/>
      <Route path='/login' element={<Login setUsername={setUsername}/>}/>
    </Routes>
    </>
  )
}

export default App
