import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { getDishs } from "../../services/DishService";
import DishForSliderComponent from './DishForSliderComponent';

function PrevArrow(props) {
	return (
		<div className="absolute top-0 -left-12 h-full flex items-center text-7xl text-orange cursor-pointer font-lora" onClick={props.onClick}>‹</div>
	)
}

function NextArrow(props) {
	return (
		<div className="absolute top-0 -right-12 h-full flex items-center text-7xl text-orange cursor-pointer font-lora" onClick={props.onClick}>›</div>
	)
}

export default function DishSliderComponent() {
  const [dishs, setDishs] = useState([]);

  useEffect(() => {
    const fetchDishs = async () => {
      const dishsData = await getDishs();
      setDishs(dishsData);
    };

    fetchDishs();
  }, []);

  var settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
	  prevArrow: <PrevArrow />,
	  nextArrow: <NextArrow />
  };


  return (
    <Slider {...settings}>
      {dishs.map((dish, index) => (
        index <= 9 && (
          <div className="p-2" key={dish.id}>
            <DishForSliderComponent item={dish} />
          </div>
        )
      ))}
    </Slider>
  );
}
