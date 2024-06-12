import React from "react";
import Slider from "react-slick";

const LandingFeaturedGames = () => {
  const settings = {
    dots: false,
    infinite: true,
    navigator: false,
    gap: 10,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div class="container" id="featured_game">
      <div class="section-heading d-flex flex-column align-items-center">
        <h5 class="subtitle text-center">Try to check out our</h5>
        <h2 class="title text-center">featured games</h2>
        <p class="text text-center">Check out our latest featured game! To meet today's challenges &amp; earn cryptocurrency. Top 10 players receive prizes every hour!</p>
      </div>
      <div style={{ maxHeight: "380px" }}>
        <Slider {...settings}>
          <div className="item">
            <div class="single-game d-flex justify-content-center align-items-center">
              <img src="https://pixner.net/dooplo3/main-v1/assets/images/game/icon1.png" alt="" />
              <a href="#" class="mybtn2">
                PLay NoW !
              </a>
            </div>
          </div>
          <div className="item">
            <div class="single-game d-flex justify-content-center align-items-center">
              <div>
                <img src="https://pixner.net/dooplo3/main-v1/assets/images/game/icon1.png" alt="" />
              </div>
              <a href="#" class="mybtn2">
                PLay NoW !
              </a>
            </div>
          </div>
          <div className="item">
            <div class="single-game d-flex justify-content-center align-items-center">
              <img src="https://pixner.net/dooplo3/main-v1/assets/images/game/icon1.png" alt="" />
              <a href="#" class="mybtn2">
                PLay NoW !
              </a>
            </div>
          </div>
          <div className="item ">
            <div class="single-game d-flex justify-content-center align-items-center ">
              <img src="https://pixner.net/dooplo3/main-v1/assets/images/game/icon1.png" alt="" />
              <a href="#" class="mybtn2">
                PLay NoW !
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LandingFeaturedGames;
