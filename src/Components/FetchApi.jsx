import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';

const FetchApi = () => {

const [Mymovies, setMymovies] = useState([]);



  const Movies = () => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=831780a63e8202e8b7590cfc472f8c44")
    .then(res => res.json())
  
    // .then(data => console.log(data.results))
    .then(data => setMymovies(data.results))

  }
console.log("array", Mymovies);

  useEffect(() => {
    Movies();

  }, [])
  
  
  return (
    <>
      <div>FetchApi</div>
      {Mymovies.map((movie, index) => (
        <img key={index} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt=""/>
      ))}
    </>
  );
}


export default FetchApi