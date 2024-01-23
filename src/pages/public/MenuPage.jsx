import React, { useEffect, useState } from "react";
import DishForMenuComponent from "./../../components/Dish/DishForMenuComponent";
import TitleComponent from "./../../components/TitleComponent";
import DishService from "../../services/DishService";
import DishOutOfStockComponent from "../../components/Dish/DishOutOfStockComponent";
import LoaderComponent from './../../components/LoaderComponent';

const colors = ["green", "orange", "blue", "red", "pink"];

function MenuPage() {
  const [dishs, setDishs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const toggleSpeciality = (speciality) => {
    if (selectedSpecialities.includes(speciality)) {
      setSelectedSpecialities(
        selectedSpecialities.filter((type) => type !== speciality)
      );
    } else {
      setSelectedSpecialities([...selectedSpecialities, speciality]);
    }
  };

  const isSpecialitySelected = (speciality) => {
    return selectedSpecialities.includes(speciality);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen w-full flex flex-col p-10">
      {loading ? (
        <div className="w-1/2 mx-auto">
          <LoaderComponent />
        </div>
      ) : (
        <div className="pb-10">
          <TitleComponent text={"Notre carte"} />
          <div className="w-full flex justify-evenly items-center mb-10">
            <div className="max-w-2xl flex flex-wrap justify-start gap-2">
              {dishs
                .reduce((allSpecialities, dish) => allSpecialities.concat(dish.speciality), [])
                .filter((value, index, self) => self.indexOf(value) === index)
                .map((speciality, index) => (
                  <button
                    key={speciality}
                    className={`text-xs font-bold rounded-2xl px-3 py-1 border-2 border-${colors[index % colors.length]} ${isSpecialitySelected(speciality) ? `bg-${colors[index % colors.length]} text-white` : `text-${colors[index % colors.length]}`}`}
                    onClick={() => toggleSpeciality(speciality)}
                  >
                    {speciality}
                  </button>
                ))}
            </div>
            <input
              type="text"
              placeholder="Rechercher par nom de plat"
              value={searchTerm}
              onChange={handleSearchTermChange}
              className="w-[300px] shadow-custom rounded-3xl px-6 py-3"
            />
          </div>
          <ul className="flex flex-wrap gap-10">
            {dishs
              .filter(dish => dish.isActive)
              .filter((dish) => {
                if (selectedSpecialities.length === 0) {
                  return true;
                } else {
                  return selectedSpecialities.includes(dish.speciality);
                }
              })
              .filter((dish) =>
                dish.name.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((dish, index) => (
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
