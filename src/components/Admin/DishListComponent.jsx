import React from "react";
import BadgeComponent from "../BadgeComponent";

function DishListComponent({dishs, edit, deleteConfirmed}) {

  const confirmDelete = (dish) => {
    const confirmed = window.confirm("Êtes-vous sûr de vouloir supprimer ce plat ?")
    if (confirmed) {
      deleteConfirmed(dish);
    }
  }

  return (
    <table className="w-full text-center mt-10">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Image</th>
          <th>Specialité</th>
          <th>Note</th>
          <th>Prix</th>
          <th>Kcal.</th>
          <th>Prot.</th>
          <th>Gluc.</th>
          <th>Lip.</th>
          <th>Actif</th>
          <th>Suggestion</th>
          <th>Stock</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {dishs &&
          dishs.map((dish, index) => (
            <tr key={index}>
              <td>{dish.name}</td>
              <td className="flex justify-center items-center">
                <img src={dish.image} className="w-10" />
              </td>
              <td>{dish.speciality}</td>
              <td>{dish.rating}⭐</td>
              <td className="text-blue">{dish.price}€</td>
              <td className="text-grey">
                {dish.kcal}
                <span className="text-xs">kcal</span>
              </td>
              <td className="text-grey">
                {dish.protein}
                <span className="text-xs">g</span>
              </td>
              <td className="text-grey">
                {dish.carbs}
                <span className="text-xs">g</span>
              </td>
              <td className="text-grey">
                {dish.fats}
                <span className="text-xs">g</span>
              </td>
              <td>
                <BadgeComponent
                  boolean={dish.isActive}
                  textTrue={"Actif"}
                  textFalse={"inactif"}
                />
              </td>
              <td>
                <BadgeComponent
                  boolean={dish.isSuggested}
                  textTrue={"Oui"}
                  textFalse={"Non"}
                />
              </td>
              <td>{dish.stock}</td>
              <div className="flex">
                <td onClick={() => edit(dish)} className="cursor-pointer">⚙️</td>
                <td onClick={() => confirmDelete(dish)} className="cursor-pointer">🗑️</td>
              </div>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default DishListComponent;
