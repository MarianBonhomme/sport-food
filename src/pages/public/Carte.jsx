import React, { useEffect, useState } from "react";
import Recipe from "../../components/Recipe";
import { getRecipes } from "../../services/RecipeService";

const colors = ['green', 'orange', 'blue', 'red', 'pink'];

function Carte() {
  const [recipes, setRecipes] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const recipesData = await getRecipes();
      setRecipes(recipesData);
    };

    fetchRecipes();
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
    <div className="min-h-screen w-full flex flex-col bg-white p-20">
      <h2 className="font-lora text-7xl font-bold mb-20">NOTRE CARTE</h2>
      <div className="max-w-3xl flex flex-wrap justify-center self-center gap-2 mb-10">
        {recipes
          .reduce((allCuisines, recipe) => allCuisines.concat(recipe.cuisine), [])
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
        {recipes.filter((recipe) => {
            if (selectedCuisines.length === 0) {
              return true;
            } else {
              return selectedCuisines.includes(recipe.cuisine);
            }
          })
          .map((recipe) => (
            <Recipe key={recipe.id} item={recipe} />
          ))}
      </ul>
    </div>
  );
}

export default Carte;