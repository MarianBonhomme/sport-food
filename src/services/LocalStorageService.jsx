const getOrderFromLocalStorage = () => {
  const storedOrder = localStorage.getItem("order");
  return storedOrder ? JSON.parse(storedOrder) : [];
};

const getHistoricalOrdersFromLocalStorage = () => {
  const storedHistoricalOrders = localStorage.getItem("historicalOrders");
  return storedHistoricalOrders ? JSON.parse(storedHistoricalOrders) : [];
};

const saveOrderToLocalStorage = (order) => {
  localStorage.setItem("order", JSON.stringify(order));
};

const saveHistoricalOrdersToLocalStorage = (historicalOrders) => {
  localStorage.setItem("historicalOrders", JSON.stringify(historicalOrders));
};

export {
  getOrderFromLocalStorage,
  getHistoricalOrdersFromLocalStorage,
  saveOrderToLocalStorage,
  saveHistoricalOrdersToLocalStorage,
};
