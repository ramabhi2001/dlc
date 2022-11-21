import React from "react";
import Slider from "react-slick";
import "./slide.css";

const Slides = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="play">
      <Slider {...settings}>
        <span>
          <a href="">New york</a>
        </span>
        <span>
          <a href="">Pune</a>
        </span>
        <span>
          <a href="">Singapore</a>
        </span>
        <span>
          <a href="">Mumbai</a>
        </span>
        <span>
          <a href="">Delhi</a>
        </span>
        <span>
          <a href="">london</a>
        </span>
        <span>
          <a href="">Bangkok</a>
        </span>
        <span>
          <a href="">Global</a>
        </span>
        <span>
          <a href="">Chennai</a>
        </span>
        <span>
          <a href="">Indore</a>
        </span>
        <span>
          <a href="">HongKong</a>
        </span>
        <span>
          <a href="">Bengaluru</a>
        </span>
        <span>
          <a href="">Kolkata</a>
        </span>
        <span>
          <a href="">St Kitts&nevis</a>
        </span>
      </Slider>
    </div>
  );
};
export default Slides;
