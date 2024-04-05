import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SliderImg() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="my-2 flex">
          <img
            src="https://img.freepik.com/vector-premium/coleccion-pancartas-verduras_1268-12420.jpg"
            className="max-sm:h-[290px] sm:h-[430px] w-full"
            alt="derek"
          />
        </div>
        <div className="my-2 flex">
          <img
            src="https://img.freepik.com/vector-premium/coleccion-pancartas-verduras_1268-12420.jpg"
            className="max-sm:h-[290px] sm:h-[450px] w-full"
            alt="derek"
          />
        </div>
        <div className="my-2 flex">
          <img
            src="https://img.freepik.com/vector-premium/coleccion-pancartas-verduras_1268-12420.jpg"
            className="max-sm:h-[290px] sm:h-[450px] w-full"
            alt="derek"
          />
        </div>
        <div className="my-2 flex">
          <img
            src="https://img.freepik.com/vector-premium/coleccion-pancartas-verduras_1268-12420.jpg"
            className="max-sm:h-[290px] sm:h-[450px] w-full"
            alt="derek"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SliderImg;
