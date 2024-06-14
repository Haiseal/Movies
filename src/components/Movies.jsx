import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Configure base URL for Axios
    axios.defaults.baseURL = 'http://localhost:5000'; // Assuming your backend server is running on port 5000

    // Fetch movies data from the backend API
    axios.get('/api/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div className="mt-12">
      <div className="mb-8 font-bold text-2xl text-center">
        Trending Movies
      </div>

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-200 px-4 py-2">#</th>
            <th className="border border-gray-200 px-4 py-2">Title</th>
            <th className="border border-gray-200 px-4 py-2">Year</th>
            <th className="border border-gray-200 px-4 py-2">Episodes</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border border-gray-200 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-200 px-4 py-2 flex items-center">
                <div className="w-12 h-16 bg-gray-200 mr-4"></div> {/* Placeholder image */}
                <div>{movie.titla_movive}</div>
                <Link to="/detail"></Link>
                {/* đây ông sửa lại để đến detail nha */}
              </td>
              <td className="border border-gray-200 px-4 py-2">{movie.year}</td>
              <td className="border border-gray-200 px-4 py-2">{movie.list_episodes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;
