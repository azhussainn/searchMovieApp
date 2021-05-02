import React, {useContext} from 'react'
import {MovieContext} from '../movieContext'

function SearchMovie() {

    const {searchMovies, query, handleChange} = useContext(MovieContext)

    return (
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">
                Movie Name
            </label>
            <input
                className="input"
                type="text"
                name="query"
                placeholder= "Search Movie"
                value={query}
                onChange={handleChange}
                />
            <button
                className="button">
                    Search</button>
        </form>
    )
}

export default SearchMovie
