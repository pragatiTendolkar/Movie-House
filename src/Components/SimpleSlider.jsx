import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="banner-slider">
                <Slider {...settings}>
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
            </div>
        </>
    );
}
