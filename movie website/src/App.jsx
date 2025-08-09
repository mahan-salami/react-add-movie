import { useState } from 'react';
import './css/App.css';
import Home from "./pages/home";
import Favorite from './pages/favorite';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar.jsx';

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    if (!favorites.some(fav => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (movieId) => {
    setFavorites(favorites.filter(movie => movie.id !== movieId));
  };

  return (
    <div className="app">
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route 
            path='/' 
            element={
              <Home 
                favorites={favorites} 
                addToFavorites={addToFavorites} 
                removeFromFavorites={removeFromFavorites} 
              />
            } 
          />
          <Route 
            path='/favorite' 
            element={
              <Favorite 
                favorites={favorites} 
                removeFromFavorites={removeFromFavorites} 
              />
            } 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;