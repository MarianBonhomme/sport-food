// Récupère la commande actuelle
const getCurrentOrderFromLocalStorage = () => {
  const storedCurrentOrder = localStorage.getItem("currentOrder");
  return storedCurrentOrder ? JSON.parse(storedCurrentOrder) : [];
};

// Récupère l'historique des commandes
const getHistoricalOrdersFromLocalStorage = () => {
  const storedHistoricalOrders = localStorage.getItem("historicalOrders");
  return storedHistoricalOrders ? JSON.parse(storedHistoricalOrders) : [];
};

// Stocke la commande actuelle
const saveCurrentOrderToLocalStorage = (currentOrder) => {
  localStorage.setItem("currentOrder", JSON.stringify(currentOrder));
};

// Stocke l'historique des commandes
const saveHistoricalOrdersToLocalStorage = (historicalOrders) => {
  localStorage.setItem("historicalOrders", JSON.stringify(historicalOrders));
};

export {
  getCurrentOrderFromLocalStorage,
  getHistoricalOrdersFromLocalStorage,
  saveCurrentOrderToLocalStorage,
  saveHistoricalOrdersToLocalStorage,
};
