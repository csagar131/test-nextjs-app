import React from "react";
import Slider from "react-slick";

const settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 2000,
  cssEase: "ease-in-out",
  accessibility: true,
  pauseOnHover: true
};

const Carousal = ({ children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousal;
