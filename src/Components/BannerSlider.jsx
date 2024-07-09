import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

function BannerSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [genres, setGenres] = useState([]);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const API_KEY = "831780a63e8202e8b7590cfc472f8c44";

  const [Mymovies, setMymovies] = useState([]);

  const Movies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?language=en-US&page=2&api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMymovies(data.results.slice(1, 11)));
  };

  console.log("array", Mymovies);

  useEffect(() => {
    Movies();
  }, []);




  const fetchGenres = async () => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=${API_KEY}`
        );
        const data = await response.json();
        setGenres(data.genres);
    } catch (error) {
        console.error("Error fetching genres:", error);
    }
};




const getMoviesByGenre = () => {
  return genres.map((genre) => ({
      genre: genre.name,
      movies: movies.filter((movie) => movie.genre_ids.includes(genre.id)),
  }));
};



  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
      {getMoviesByGenre().map(({ genre, movies }) => (

        
          <div key={index} className="banner-slide">
            <div
              className="banner-container"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${banner.backdrop_path})`,
              }}
            >
              <div className="banner-content">
                <h2>{banner.title}</h2>
                <p>{banner.overview}</p>
              </div>
            </div>

          </div>
        ))}
      </Slider>

<div className="thumbnail-section">
<div className="thumbnail-slider-container">
  <div className="extra-space">

  </div>
        <Slider
          asNavFor={nav1}
          ref={slider => (sliderRef2 = slider)}
          slidesToShow={7}
          swipeToSlide={true}
          focusOnSelect={true}
        >


          {Mymovies.map((movie, index) => (
            <div className="banner-thumbnail">
              <img key={index} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="banner-thumbnail-img rounded-lg" />
            </div>
          ))}

          
        </Slider>
      </div>
</div>

  
    </div>
  );
}

export default BannerSlider;
