import React from "react";
import BannerSlider from "./BannerSlider"
import SimpleSlider from "./SimpleSlider";
import Popular from "./Popular";
import TopMovies from "./TopMovies";
import Videos from "./Videos";


const Home = () => {
  return(
    <>
    < BannerSlider />
    {/* < Videos />  */}
    < SimpleSlider category="movie" />
    < Popular />
    < TopMovies  />

    </>
  )
};

export default Home;
