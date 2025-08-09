import '../css/Favorites.css';
import Moviecard from '../Components/Moviecard';

function Favorite({ favorites, removeFromFavorites }) {
  return (
    <div className='favorites-container'>
      {favorites.length === 0 ? (
        <div className='favorites-empty'>
          <h2>No favorite movies added</h2>
          <p>Start adding movies</p>
        </div>
      ) : (
        <div className='favorites-grid'>
          {favorites.map(movie => (
            <Moviecard 
              key={movie.id}
              movie={movie}
              isFavorite={true}
              addToFavorites={() => {}}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorite;