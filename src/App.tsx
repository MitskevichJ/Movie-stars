import React from 'react';
import './App.css';
import Movies from './Movies';

interface Movie {
  id: string;
  title: string;
  releaseYear: string;
  format: string;
  stars: string[];
}

const moviesData: Movie[] = [
  {
    id: '1',
    title: 'Pulp Fiction',
    releaseYear: '2004',
    format: 'DVD',
    stars: ['John Travolta', 'Uma Thurman'],
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Movies movies={moviesData} />
    </div>
  );
};

export default App;