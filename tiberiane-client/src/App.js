import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NaviBar from "./components/NaviBar.js";
import Home from "./pages/Home.js";
import Prodotti from "./pages/Prodotti.js";
import ReactDOM from "react-dom/client";
import Contatti from "./pages/Contatti";
import ChiSiamo from './pages/ChiSiamo';

function App() {
  return (
    <BrowserRouter>
    <NaviBar />
    <Routes>
      <Route index element ={<Home/>} />
      <Route path="home" element ={<Home/>} />
      <Route path ="prodotti" element={<Prodotti/>} />
      <Route path ="contatti" element = {<Contatti/>} />
      <Route path ="chisiamo" element = {<ChiSiamo/>} />
    </Routes>
    </BrowserRouter>
  );
}

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);

export default App;
