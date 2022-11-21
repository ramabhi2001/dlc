import React from "react";
import Slider from "react-slick";
import "./mulity.css";
import com from "../../assets/image/global.webp";
import forbes from "../../assets/image/forbes.webp";
import yahoo from "../../assets/image/yahoo-finance.webp";
import eco from "../../assets/image/th-eco.webp";
import times from "../../assets/image/india.webp";
import medium from "../../assets/image/medium.webp";
import bw from "../../assets/image/bw.webp";
import telegra from "../../assets/image/telegraph.webp";
import bloo from "../../assets/image/bloomberg.webp";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="align">
      <div className="slice">
        <h1>IN THE NEWS</h1>
        <div>
          <a href=""> Browse all Global Media</a>
        </div>
        <Slider {...settings}>
          <div>
            <a href="">
              <img className={"image"} src={com} />
            </a>
          </div>
          <div>
            <a href="">
              <img className={"image"} src={forbes} />
            </a>
          </div>

          <div>
            <a href="">
              <img className={"image"} src={yahoo} />
            </a>
          </div>
          <div>
            <a href="">
              <img className={"image"} src={eco} />
            </a>
          </div>
          <div>
            <a href="">
              <img className={"image"} src={times} />
            </a>
          </div>
          <div>
            <a href="">
              <img className={"image"} src={medium} />
            </a>
          </div>
          <div>
            <a href="">
              <img className={"image"} src={bw} />
            </a>
          </div>
          <div>
            <a href="">
              <img className={"image"} src={telegra} />
            </a>
          </div>
          <div>
            <a href="">
              <img className={"image"} src={bloo} />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Hero;
