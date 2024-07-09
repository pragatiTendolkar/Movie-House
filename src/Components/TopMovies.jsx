import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/simpleslider.scss'



const API_KEY = "831780a63e8202e8b7590cfc472f8c44";

export default function TopMovies() {
    const [topmovies, setTopmovies] = useState([]);

    const fetchtopmovies = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`
            );
            const data = await response.json();
            setTopmovies(data.results.slice(0, 11));
        } catch (error) {
            console.error("Error fetching topmovies:", error);
        }
    };

    useEffect(() => {
        fetchtopmovies();
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,  // Changed to 4 to better fit smaller screens
        slidesToScroll: 1,
    };

    return (
        <div className="list-slider">
            <h2>Top Rated</h2>
            <Slider {...settings}>
                {topmovies.map((topmovie) => (
                    <div key={topmovie.id} className="list-banner-slide">
                        <div className="list-container">
                                          <img  src={`https://image.tmdb.org/t/p/original${topmovie.poster_path}`} alt="" className="banner-thumbnail-img rounded-lg" />

                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
