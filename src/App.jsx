import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Carte from "./pages/public/Carte";
import Home from "./pages/public/Home";
import Localisation from "./pages/public/Localisation";
import Presentation from "./pages/public/Presentation";
import Footer from "./components/Footer";
import Auth from './pages/private/Auth';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/presentation" Component={Presentation} exact />
        <Route path="/carte" Component={Carte} exact />
        <Route path="/localisation" Component={Localisation} exact />
        <Route path="/connexion" Component={Auth} exact />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
