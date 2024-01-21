import React, { useEffect, useState } from "react";
import DishComponent from "../../components/DishComponent";
import { getDishs } from './../../services/DishService';

const colors = ['green', 'orange', 'blue', 'red', 'pink'];

function MenuPage() {
  const [dishs, setDishs] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  useEffect(() => {
    const fetchDishs = async () => {
      const dishsData = await getDishs();
      setDishs(dishsData);
    };

    fetchDishs();
  }, []);

  const toggleCuisine = (cuisine) => {
    if (selectedCuisines.includes(cuisine)) {
      setSelectedCuisines(
        selectedCuisines.filter((type) => type !== cuisine)
      );
    } else {
      setSelectedCuisines([...selectedCuisines, cuisine]);
    }
  };

  const isCuisineSelected = (cuisine) => {
    return selectedCuisines.includes(cuisine);
  };

  return (
    <div className="min-h-screen w-full flex flex-col p-20">
      <h2 className="font-lora text-7xl font-bold mb-20">NOTRE CARTE</h2>
      <div className="max-w-3xl flex flex-wrap justify-center self-center gap-2 mb-10">
        {dishs
          .reduce((allCuisines, dish) => allCuisines.concat(dish.cuisine), [])
          .filter((value, index, self) => self.indexOf(value) === index)
          .map((cuisine, index) => (
            <button
              key={cuisine}
              className={`text-xs font-bold rounded-2xl px-3 py-1 border-2 border-${colors[index % colors.length]} ${isCuisineSelected(cuisine) ? `bg-${colors[index % colors.length]} text-white` : `text-${colors[index % colors.length]}`}`}
              onClick={() => toggleCuisine(cuisine)}
            >
              {cuisine}
            </button>
          ))}
      </div>
      <ul className="flex flex-wrap justify-center gap-10">
        {dishs.filter((dish) => {
            if (selectedCuisines.length === 0) {
              return true;
            } else {
              return selectedCuisines.includes(dish.cuisine);
            }
          })
          .map((dish) => (
            <DishComponent key={dish.id} item={dish} />
          ))}
      </ul>
    </div>
  );
}

export default MenuPage;