import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { UserContextProvider } from "./context/userContext";
import AddDishPage from "./pages/private/AddDishPage";
import DishListPage from "./pages/private/DishListPage";
import PrivatePage from "./pages/private/PrivatePage";
import AuthPage from "./pages/public/AuthPage";
import HistoricalPage from './pages/public/HistoricalPage';
import HomePage from "./pages/public/HomePage";
import LocalisationPage from "./pages/public/LocalisationPage";
import MenuPage from "./pages/public/MenuPage";
import OrderPage from "./pages/public/OrderPage";
import PresentationPage from "./pages/public/PresentationPage";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <HeaderComponent />
        <div className="min-h-screen pt-[70px]">
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/presentation" Component={PresentationPage} />
            <Route path="/menu" Component={MenuPage} />
            <Route path="/localisation" Component={LocalisationPage} />
            <Route path="/order" Component={OrderPage} />
            <Route path="/historical" Component={HistoricalPage} />
            <Route path="/auth" Component={AuthPage} />
            <Route path="/private" Component={PrivatePage}>
              <Route path="/private/list" Component={DishListPage} />
              <Route path="/private/add" Component={AddDishPage} />
            </Route>
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </div>
        <FooterComponent />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
