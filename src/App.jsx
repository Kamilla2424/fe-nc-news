import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import ArticlesList from './Components/ArticlesList'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/articles' element={<ArticlesList/>}/>
    </Routes>
    </>
  )
}

export default App
