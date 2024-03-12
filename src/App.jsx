import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import ArticlesList from './Components/ArticlesList'
import Article from './Components/Article'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/articles' element={<ArticlesList/>}/>
      <Route path='/articles/:article_id' element={<Article/>}/>
    </Routes>
    </>
  )
}

export default App
