import React from "react";
import BannerSlider from "./BannerSlider"
import SimpleSlider from "./SimpleSlider";
import Popular from "./Popular";
import TopMovies from "./TopMovies";


const Home = () => {
  return(
    <>
    < BannerSlider />
    < SimpleSlider category="movie" />
    < Popular />
    < TopMovies  />
    </>
  )
};

export default Home;
