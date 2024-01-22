import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const dishsCollectionRef = collection(db, "dishs");

const DishService = {
  getAllDish: async () => {
    try {
      const data = await getDocs(dishsCollectionRef);
	  const dishs = data.docs.map((doc) => ({...doc.data()}));
	  return dishs;
    } catch (error) {
      console.error("Erreur lors de la récupération des plats:", error);
      throw error;
    }
  },

  addOneDish: async (dish) => {
    try {
      const newDishRef = db.ref("plats").push();
      const newDishId = newDishRef.key;

      await newDishRef.set({ ...dish, id: newDishId });

      return newDishId;
    } catch (error) {
      console.error("Erreur lors de l'ajout du plat:", error);
      throw error;
    }
  },

  deleteOneDish: async (dishId) => {
    try {
      await db.ref(`plats/${dishId}`).remove();
    } catch (error) {
      console.error("Erreur lors de la suppression du plat:", error);
      throw error;
    }
  },
};

export default DishService;