export const getRecipes = async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error("Erreur lors de la récupération des recettes", error);
    return [];
  }
};
