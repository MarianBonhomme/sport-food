import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import DishForSliderComponent from './DishForSliderComponent';
import DishService from "../../services/DishService";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDishs = async () => {
      try {
        const fetchedDishs = await DishService.getAllDish();
        setDishs(fetchedDishs);
      } catch (error) {
        console.error("Erreur lors du chargement des plats:", error);
      }
      setLoading(false)
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
      {loading ? (
        <img src="src/assets/loader.gif" className="w-full"/>
      ) : (
        dishs.filter(dish => dish.isSuggested & dish.stock > 0).map((dish, index) => (
          dish.isSuggested && (
            <div className="p-2" key={index}>
              <DishForSliderComponent item={dish} />
            </div>
          )
        ))
      )}
    </Slider>
  );
}
