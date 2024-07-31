import React from 'react'

const MovieList = ({ movies }) => {
    return (
        <div className=' grid grid-cols-5 gap-y-16 j pl-6 pr-6 justify-items-center'>
            {movies.map((movie) => (
                <div key={movie.id} className='h-72 w-52 relative mb-6 flex flex-col p-5 rounded-lg bg-slate-500 pt-12'>
                    <h2 className='absolute -top-1 w-4/5 text-white text-center '>{movie.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie-image" className='h-3/4 w-52 rounded-xl' />
                    <div className='absolute bottom-0 bg-gray-300 p-1 w-4/5 rounded-xl'>
                        <p >Released: {movie.release_date}</p>
                        <p>Language: <span className='uppercase'>{movie.original_language}</span></p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default MovieList
