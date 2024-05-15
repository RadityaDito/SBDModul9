import React, { useState, useEffect } from "react";
import { fetchMoviesWithAxios } from "./actions/Movie.actions";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const apiResponse = await fetchMoviesWithAxios();
    if (apiResponse.success) {
      //See the result in the console from the browser
      console.log("Response In App.jsx");
      console.log(apiResponse.data);

      setMovies(apiResponse.data);
    } else {
      alert("Failed to fetch movies");
    }
  };

  //useEffect with empty array as second argument will run only once when the component is mounted
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="">
      <h1>Movie List Page</h1>
    </div>
  );
}

export default App;
