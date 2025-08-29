import React from 'react';
import Stars from './Stars';

interface Movie {
  id: string;
  title: string;
  releaseYear: string;
  format: string;
  stars: string[];
  // Если рейтинг вместо списка актеров, то rating: number;
}

interface MoviesProps {
  movies: Movie[];
}

const Movies: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <h3>{movie.title}</h3>
          <p>Release Year: {movie.releaseYear}</p>
          <Stars count={5} />  {/* Если рейтинг, используйте movie.rating */}
        </div>
      ))}
    </div>
  );
};

export default Movies;