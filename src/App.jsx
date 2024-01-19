import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { UserContextProvider } from "./context/userContext";
import AjouterPlat from "./pages/private/AjouterPlat";
import ListePlats from "./pages/private/ListePlats";
import Auth from "./pages/public/Auth";
import Carte from "./pages/public/Carte";
import Home from "./pages/public/Home";
import Localisation from "./pages/public/Localisation";
import Presentation from "./pages/public/Presentation";
import Private from "./pages/private/Private";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/presentation" Component={Presentation} />
          <Route path="/carte" Component={Carte} />
          <Route path="/localisation" Component={Localisation} />
          <Route path="/connexion" Component={Auth} />
          <Route path="/private" Component={Private}>
            <Route path="/private/liste" Component={ListePlats} />
            <Route path="/private/ajouter" Component={AjouterPlat} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
