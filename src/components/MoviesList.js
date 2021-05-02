import React, {useContext} from 'react'
import {MovieContext} from '../movieContext'
import MovieCard from './MovieCard'

function MoviesList() {
    const {movies} = useContext(MovieContext)

    const filteredMovies = movies.filter(movie => movie.poster_path)

    return (
        <div className="card-list">
            {filteredMovies.map(movie =>(<MovieCard key={movie.id} movie={movie}/>))}
        </div>
    )
}

export default MoviesList