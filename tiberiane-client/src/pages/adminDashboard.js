import Header from "../components/header";
import BagAdd from "../components/BagAdd";
import ShowBags from "../components/ShowBags";
import { useState } from "react";
const AdminDashboard = () => {
  const head = Header("Pannello di gestione");
  const [sceltaOp, setSceltaOp] = useState("");

  const currentOp = () => {
    switch (sceltaOp) {
      case "Aggiungi borsa":
        return <BagAdd />;
      case "Mostra borse":
        return <ShowBags />;
      default:
        return <br />;
    }
  };

  return (
    <div>
      {head}
      <div className="min-h-screen">
        <div className="flex flex-col justify-center items-center content-center text-center">
          <section className="mt-10 bg-fuchsia-50/80 shadow-md rounded-3xl px-6 pt-6 pb-8 mb-4">
            <label
              className="text-black-800 block text-black-800 text-sm font-bold mb-2"
              htmlFor="menu"
            >
              Operazione corrente
              <select
                id="menu"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={sceltaOp}
                onChange={(e) => setSceltaOp(e.target.value)}
              >
                <option value="">Mostra operazioni...</option>
                <option value="Aggiungi borsa">Aggiungi una borsa</option>
                <option value="Mostra borse">Mostra borse</option>
              </select>
            </label>

            {currentOp()}
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
