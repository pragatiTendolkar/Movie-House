import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

function BannerSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);



  const [Mymovies, setMymovies] = useState([]);

  const Movies = () => {
      fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=831780a63e8202e8b7590cfc472f8c44"
      )
          .then((res) => res.json())
          .then((data) => setMymovies(data.results));
  };
  console.log("array", Mymovies);
  useEffect(() => {
      Movies();
  }, []);




  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
      {Mymovies.map((movie, index) => (
                        <div key={index} className="banner-slide">
                            <div
                                className="banner-container"
                                style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                                }}
                            >
                                <div className="banner-content">
                                    <h2>{movie.title}</h2>
                                    <p>{movie.overview}</p>
                                </div>
                            </div>
                         
                        </div>
                    ))}
      </Slider>
   
    <div className="thumbnail-slider-container">
      <Slider
        asNavFor={nav1}
        ref={slider => (sliderRef2 = slider)}
        slidesToShow={8}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        
      {Mymovies.map((movie, index) => (
        <div className="banner-thumbnail">
        <img key={index} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""  className="banner-thumbnail-img rounded-lg"/>
        </div>
      ))}
      </Slider>
      </div>
    </div>
  );
}

export default BannerSlider;
