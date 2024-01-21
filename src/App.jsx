import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { UserContextProvider } from "./context/userContext";
import AddRecipePage from "./pages/private/AddRecipePage";
import PrivatePage from "./pages/private/PrivatePage";
import RecipeListPage from "./pages/private/RecipeListPage";
import AuthPage from "./pages/public/AuthPage";
import HomePage from "./pages/public/HomePage";
import LocalisationPage from "./pages/public/LocalisationPage";
import MenuPage from "./pages/public/MenuPage";
import OrderRecapPage from "./pages/public/OrderRecapPage";
import PresentationPage from './pages/public/PresentationPage';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <HeaderComponent />
        <div className="min-h-screen pt-[70px]">
          <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/presentation" Component={PresentationPage} />
            <Route path="/carte" Component={MenuPage} />
            <Route path="/localisation" Component={LocalisationPage} />
            <Route path="/order" Component={OrderRecapPage} />
            <Route path="/auth" Component={AuthPage} />
            <Route path="/private" Component={PrivatePage}>
              <Route path="/private/liste" Component={RecipeListPage} />
              <Route path="/private/ajouter" Component={AddRecipePage} />
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
