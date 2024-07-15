import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/simpleslider.scss";

const API_KEY = "831780a63e8202e8b7590cfc472f8c44"; 

export default function SimpleSlider({ category, limit }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMovies = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch movies");
            }
            const data = await response.json();
            setMovies(data.results.slice(0, limit));
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [category, limit]);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="list-slider">
            <h2>Now Playing</h2>
            <Slider {...settings}>
                {movies.map((movie) => (
                    <div key={movie.id} className="list-banner-slide">
                        <div className="list-container">
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt={movie.title}
                                className="banner-thumbnail-img rounded-lg"
                            />
                            {/* <div className="movie-info">
                                <h3>{movie.title}</h3>
                            </div> */}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

SimpleSlider.propTypes = {
    category: PropTypes.string.isRequired,
    limit: PropTypes.number,
};

SimpleSlider.defaultProps = {
    category: "movie",
    limit: 12, // Default limit is 12
};
