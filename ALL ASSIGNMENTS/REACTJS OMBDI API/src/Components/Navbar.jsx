import React, { useState } from "react";

export default function Navbar({ onSearch }) {
  const [movieName, setMovieName] = useState("");

  function handleChange(e) {
    setMovieName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(movieName);
  }

  return (
    <header className="header bg-emerald-500 h-20 flex justify-around items-center">
      <nav className="flex gap-96">
        <h1 className="font-thin text-3xl text-zinc-900">Movies</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={movieName}
            className="rounded-lg w-80 h-10 pl-5 focus:outline-none "
            onChange={handleChange}
            placeholder="Search for a movie..."
          />
         
        </form>
      </nav>
    </header>
  );
}
