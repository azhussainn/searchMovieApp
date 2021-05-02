import React from 'react'
import SearchMovie from './components/SearchMovie'
import MoviesList from './components/MoviesList'

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovie />
      <MoviesList />
    </div>
  )
}

export default App
