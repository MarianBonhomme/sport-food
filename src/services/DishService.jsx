import { collection, getDocs, addDoc, updateDoc, doc, getDoc, query, where, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import data from '../../data.json';

const dishsCollectionRef = collection(db, "dishs");

const DishService = {
  getAllDish: async () => {
    try {
      const data = await getDocs(dishsCollectionRef);
	    const dishs = data.docs.map((doc) => ({...doc.data()}));
	    return dishs;
    } catch (error) {
      console.error("Erreur lors de la récupération des plats:", error);
      return data; // données statiques (si quota firebase dépassé)
      throw error;
    }
  },

  editOneDish: async (dish, isNew) => {
    if (isNew) {
      await addDoc(dishsCollectionRef, {
        uniqid: dish.uniqid,
        name: dish.name,
        image: dish.image,
        speciality: dish.speciality,
        rating: dish.rating,
        price: dish.price,
        kcal: dish.kcal,
        protein: dish.protein,
        carbs: dish.carbs,
        fats: dish.fats,
        isActive: dish.isActive,
        isSuggested: dish.isSuggested,
        stock: dish.stock
      })
    } else {
      try {
        const existingDish = await getDishByUniqid(dish.uniqid);
        if (existingDish) {
          await updateDoc(existingDish.ref, {
            name: dish.name,
            image: dish.image,
            speciality: dish.speciality,
            rating: dish.rating,
            price: dish.price,
            kcal: dish.kcal,
            protein: dish.protein,
            carbs: dish.carbs,
            fats: dish.fats,
            isActive: dish.isActive,
            isSuggested: dish.isSuggested,
            stock: dish.stock
          });
        } else {
          console.error("Aucun document trouvé avec l'uniqid :", dish.uniqid);
        }
      } catch (error) {
        console.error("Erreur lors de la mise à jour du plat:", error);
        throw error;
      }
    }
  },

  deleteOneDish: async (dish) => {
    try {
      const existingDish = await getDishByUniqid(dish.uniqid);
      if (existingDish) {
        await deleteDoc(existingDish.ref);
      } else {
        console.error("Aucun document trouvé avec l'uniqid :", dish.uniqid);
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du plat :", error);
      throw error;
    }
  }
};

const getDishByUniqid = async (uniqid) => {
  try {
    const querySnapshot = await getDocs(
      query(dishsCollectionRef, where("uniqid", "==", uniqid))
    );

    if (!querySnapshot.empty) {
      const dishData = querySnapshot.docs[0].data();
      const dishRef = querySnapshot.docs[0].ref;
      return { ...dishData, ref: dishRef };
    } else {
      console.error("Aucun document trouvé avec l'uniqid :", uniqid);
      return null;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du plat par uniqid:", error);
    throw error;
  }
}

export default DishService;