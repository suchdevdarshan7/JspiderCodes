'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'

const Home = () => {
  const [inputName, setInputName] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  const updateName = ({ target: { value } }) => {
    setInputName(value)
  }

  const getMovie = async () => {
    if (!inputName) return

    setLoading(true)
    setError('')
    setHasSearched(true)

    try {
      const moviedata = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5af0ac2cb7cb7d43cf343c616f3b034c&query=${inputName}`)
      const { data: { results } } = moviedata
      setMovies(results)
      if (results.length === 0) {
        setError('Movies not found')
      }
    } catch (error) {
      console.error('Error fetching movie data:', error)
      setError('Error fetching movie data')
    }

    setLoading(false)
  }

  useEffect(() => {
    if (inputName) {
      getMovie()
    }
  }, [inputName])

  return (
    <div>
      <SearchBar updateName={updateName} getMovie={getMovie} />
      {loading && <p className='text-center text-2xl'>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && movies.length > 0 && <MovieList movies={movies} />}
      {!loading && !error && movies.length === 0 && hasSearched && <p className='text-center text-2xl'>Movies not found</p>}
      {!loading && !error && movies.length > 0 && (
        <footer className='text-center text-xl'>
          Copyrights &copy; by Darshan😎
        </footer>
      )}
    </div>
  )
}

export default Home
