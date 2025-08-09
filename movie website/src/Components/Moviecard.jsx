import React from 'react';
import '../css/Moviecard.css';

function Moviecard({ movie, isFavorite, addToFavorites, removeFromFavorites }) {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={movie.poster} alt={movie.title} />
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release}</p>
      </div>
    </div>
  );
}

export default Moviecard;