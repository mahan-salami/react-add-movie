
import Moviecard from "../Components/Moviecard"
import { useState } from "react"
import '../css/Home.css';
function Home({ favorites, addToFavorites }) {
const [SearchQuery, setSearchQuery] = useState("");

  const movies = [
    {id: 1, title: "شب برهنه", release: "2001", poster: "../images/34110.jpg"},
    {id: 2, title: "پر پرواز", release: "2000", poster: "/images/Pare-parvaz-movie-poster.jpg"}, 
    {id: 3, title: "2شب برهنه", release: "2002", poster: "/images/movie3.jpg"},
    {id: 4, title: "شب برهنه", release: "2001", poster: "../images/34110.jpg"},
    {id: 5, title: "پر پرواز", release: "2000", poster: "/images/Pare-parvaz-movie-poster.jpg"}, 
    {id: 6, title: "2شب برهنه", release: "2002", poster: "/images/movie3.jpg"},
    {id: 7, title: "2شب برهنه", release: "2002", poster: "/images/movie3.jpg"},
    {id: 8, title: "شب برهنه", release: "2001", poster: "../images/34110.jpg"},
    {id: 9, title: "پر پرواز", release: "2000", poster: "/images/Pare-parvaz-movie-poster.jpg"}
  ]
  
  const HandleSearch = (e) => {
    e.preventDefault();
    alert(SearchQuery);
    setSearchQuery("");
  };

  return (
    <div className='home'>
      <form onSubmit={HandleSearch} className="search-form">
        <input 
          type="text" 
          className="search-input" 
          placeholder="search movie ..." 
          value={SearchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">search</button>
      </form>
      <div className='movie-grid'>
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(SearchQuery) && 
          <Moviecard 
            key={movie.id}
            movie={movie}
            isFavorite={favorites.some(fav => fav.id === movie.id)}
            addToFavorites={addToFavorites}
            removeFromFavorites={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;