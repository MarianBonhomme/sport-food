import React, { useState } from "react";
import BadgeComponent from "../BadgeComponent";

function DishListComponent({dishs, edit, deleteConfirmed}) {
  const [sorting, setSorting] = useState({
    column: null,
    direction: 'asc',
  });

  const handleSort = (column) => {
    setSorting((prevSorting) => {
      if (prevSorting.column === column) {
        return {
          ...prevSorting,
          direction: prevSorting.direction === 'asc' ? 'desc' : 'asc',
        };
      } else {
        return {
          column,
          direction: 'asc',
        };
      }
    });
  };

  const sortedDishs = [...dishs].sort((a, b) => {
    const key = sorting.column;
    const order = sorting.direction === 'asc' ? 1 : -1;

    if (key === 'name' || key === 'speciality') {
      return a[key].localeCompare(b[key]) * order;
    } else if (key === 'price' || key === 'rating' || key === 'stock') {
      return (a[key] - b[key]) * order;
    }

    return 0;
  });

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
          <th onClick={() => handleSort('name')}>
            Nom {sorting.column === 'name' && (
              <span className={`arrow ${sorting.direction === 'asc' ? 'asc' : 'desc'}`}>🎚️</span>
            )}
          </th>
          <th>Image</th>
          <th>Specialité</th>
          <th onClick={() => handleSort('rating')}>
            Note {sorting.column === 'rating' && (
              <span className={`arrow ${sorting.direction === 'asc' ? 'asc' : 'desc'}`}>🎚️</span>
            )}
          </th>
          <th onClick={() => handleSort('price')}>
            Prix {sorting.column === 'price' && (
              <span className={`arrow ${sorting.direction === 'asc' ? 'asc' : 'desc'}`}>🎚️</span>
            )}
          </th>
          <th>Kcal.</th>
          <th>Prot.</th>
          <th>Gluc.</th>
          <th>Lip.</th>
          <th>Actif</th>
          <th>Suggestion</th>
          <th onClick={() => handleSort('stock')}>
            Stock {sorting.column === 'stock' && (
              <span className={`arrow ${sorting.direction === 'asc' ? 'asc' : 'desc'}`}>🎚️</span>
            )}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {sortedDishs &&
          sortedDishs.map((dish, index) => (
            <tr key={index} className="border-t">
              <td>{dish.name}</td>
              <td>
                <img src={dish.image} className="w-10 mx-auto" />
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
              <div className="py-5">
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
