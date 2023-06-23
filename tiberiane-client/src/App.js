import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NaviBar from "./components/NaviBar.js";
import Home from "./pages/Home.js";
import Prodotti from "./pages/Prodotti.js";
import Contatti from "./pages/Contatti";
import ChiSiamo from "./pages/ChiSiamo";
import Social from "./pages/Social";
import "../src/i18n";

function App() {
  return (
    <BrowserRouter>
      <NaviBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="prodotti" element={<Prodotti />} />
        <Route path="contatti" element={<Contatti />} />
        <Route path="chisiamo" element={<ChiSiamo />} />
        <Route path="social" element = {<Social />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
