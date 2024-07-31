import React, { useState, useEffect } from "react";
import MovieContainer from "./Components/MovieContainer";
import Navbar from './Components/Navbar'
import './style.css';

export default function App() {
  const [movieName, setMovieName] = useState("");

  function handleSearch(movie) {
    setMovieName(movie);
  }

  return (
    <div >
      <Navbar onSearch={handleSearch} />
      <MovieContainer movieName={movieName} />
    </div>
  );
}







