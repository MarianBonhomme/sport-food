import React, { useEffect, useState } from "react";
import DishListComponent from "../../components/Admin/DishListComponent";
import DishService from "../../services/DishService";
import LoaderComponent from "../../components/LoaderComponent";
import TitleComponent from "../../components/TitleComponent";
import ButtonComponent from "../../components/ButtonComponent";
import HandleDishComponent from "../../components/Admin/HandleDishComponent";

function DishListPage() {
  const [dishs, setDishs] = useState([]);
  const [isHandleFormDisplayed, setIsHandleFormDisplayed] = useState(false)
  const [dishToUpdate, setDishToUpdate] = useState(null);
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
  }, [dishs]);

  const addButtonClicked = () => {
    setDishToUpdate(null);
    setIsHandleFormDisplayed(true);
  }

  const createDish = (dish) => {
    const isNew = true;
    DishService.editOneDish(dish, isNew);
  }

  const updateDish = (dish) => {
    const isNew = false;
    DishService.editOneDish(dish, isNew);
  }

  const deleteDish = (dish) => {
    DishService.deleteOneDish(dish);
  }

  const edit = (dish) => {
    setDishToUpdate(dish);
    setIsHandleFormDisplayed(true);
  }

  return (
    <div className="min-h-screen w-full flex flex-col p-10">
      {loading ? (
        <div className="mx-auto">
          <LoaderComponent />
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <TitleComponent text="Liste des plats" />
            <p onClick={addButtonClicked}>
              <ButtonComponent color="blue" size="sm" text={"Ajouter un plat"} />
            </p> 
            <DishListComponent dishs={dishs} edit={edit} deleteConfirmed={deleteDish}/>       
          </div>
          {isHandleFormDisplayed && (
            <HandleDishComponent dish={dishToUpdate} created={createDish} updated={updateDish} close={() => setIsHandleFormDisplayed(false)}/>
          )}
        </>
      )}
    </div>
  );
}

export default DishListPage;
