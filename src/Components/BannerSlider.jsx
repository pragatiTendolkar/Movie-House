import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/simpleslider.scss";

const API_KEY = "831780a63e8202e8b7590cfc472f8c44";

function BannerSlider() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?language=en-US&page=2&api_key=${API_KEY}`
            );
            const data = await response.json();
            setMovies(data.results.slice(1, 11));
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

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

    useEffect(() => {
        fetchMovies();
        fetchGenres();
    }, []);

    const getGenreNames = (genreIds) => {
        return genreIds.map((id) => genres.find((g) => g.id === id)?.name).filter(Boolean);
    };

    const fetchTrailers = async (movieId) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
            );
            const data = await response.json();
            const trailer = data.results.find(video => video.type === "Trailer");
            return trailer || null;
        } catch (error) {
            console.error("Error fetching trailers:", error);
            return null;
        }
    };

    const handleWatchTrailer = async (movieId) => {
        const trailer = await fetchTrailers(movieId);
        if (trailer) {
            setSelectedVideo(trailer.key);
        } else {
            console.log("No trailer available");
        }
    };

    const handleCancelTrailer = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="slider-container">
            <Slider asNavFor={nav2} ref={sliderRef1}>
                {movies.map((movie, index) => (
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
                                <ul className="genre-list">
                                    {getGenreNames(movie.genre_ids).map((genre, i) => (
                                        <li key={i}>{genre}</li>
                                    ))}
                                </ul>

                                <button className="trailer-btn" onClick={() => handleWatchTrailer(movie.id)}>Watch Trailer</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            <div className="thumbnail-section">
                <div className="thumbnail-slider-container">
                    <Slider
                        asNavFor={nav1}
                        ref={sliderRef2}
                        slidesToShow={7}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        {movies.map((movie, index) => (
                            <div key={index} className="banner-thumbnail">
                                <img
                                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                    alt={movie.title}
                                    className="banner-thumbnail-img rounded-lg"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {selectedVideo && (
                <div className="trailer-modal">
                    <div className="trailer-container">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Movie Trailer"
                        ></iframe>
                        <button className="cancel-btn" onClick={handleCancelTrailer}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

BannerSlider.propTypes = {
    API_KEY: PropTypes.string,
};

export default BannerSlider;
