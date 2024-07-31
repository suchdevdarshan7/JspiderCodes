import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import Footer from "./Footer";

export default function MovieContainer({ movieName }) {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (movieName.trim() !== "") {
      fetchMovies(movieName);
    }
  }, [movieName]);

  async function fetchMovies(movieName) {
    try {
      let url = `http://www.omdbapi.com/?apikey=ad9394d1&s=${movieName}`;
      const response = await axios.get(url);

      if (response.data.Search) {
        console.log(response.data.Search)
        setApiData(response.data.Search);
      } else {
        setApiData([]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-7 justify-center items-center mb-9">
        {isLoading ? (
          <p>Loading...</p>
        ) : apiData.length ? (
          apiData.map((movie) => (
            <Movie
              key={movie.imdbID}
              title={movie.Title}
              image={movie.Poster}
              year={movie.Year}
            />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
      <Footer isLoading={isLoading} />
    </div>
  );
}
