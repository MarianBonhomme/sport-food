import React, { useEffect, useState } from "react";
import DishForMenuComponent from "./../../components/Dish/DishForMenuComponent";
import TitleComponent from "./../../components/TitleComponent";
import DishService from "../../services/DishService";
import DishOutOfStockComponent from "../../components/Dish/DishOutOfStockComponent";

const colors = ["green", "orange", "blue", "red", "pink"];

function MenuPage() {
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
      setLoading(false);
    };

    fetchDishs();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col p-10">
      {loading ? (
        <img src="src/assets/loader.gif" className="w-1/2 mx-auto"/>
      ) : (
        <div className="pb-10">
          <TitleComponent text={"Notre carte"} />
          <ul className="flex flex-wrap gap-10">
            {dishs.filter(dish => dish.isActive).map((dish, index) => (
                dish.stock > 0 ? (
                  <DishForMenuComponent key={index} item={dish} />
                ) : (
                  <DishOutOfStockComponent key={index} item={dish} />
                )
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuPage;
