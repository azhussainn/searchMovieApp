import React, {useState} from 'react'
const MovieContext = React.createContext()

const MovieContextProvider = (props) => {
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])


    const handleChange = (e) => {
        const {value} = e.target
        setQuery(value)
    }

    const searchMovies = async (e) => {
        e.preventDefault()

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <MovieContext.Provider
         value={{
            query,
            searchMovies,
            handleChange,
            movies}}
        >
            {props.children}
        </MovieContext.Provider>
    )

}

export {MovieContextProvider, MovieContext}