import React, { useState } from "react";
import { BsFillBagPlusFill } from "react-icons/bs";
import secureLocalStorage from "react-secure-storage";

const BagAdd = () => {
  const [nome, setNome] = useState("");
  const [colore, setColore] = useState("");
  const [prezzo, setPrezzo] = useState("");
  const [qta, setQta] = useState("");
  const [dataProd, setDataProd] = useState("");

  const handleBagAdd = async (event) => {
    event.preventDefault();
    const data = { nome, colore, prezzo, qta, dataProd };
    const response = await fetch("http://localhost:6868/admin/addBag", {
      method: "POST",
      headers: {
        authorization: `Bearer ${secureLocalStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // const result = await response.json();
  };

  return (
    <div>
      <form className="w-full max-w-lg" onSubmit={handleBagAdd}>
        <label
          className="text-black-800 block text-black-800 text-sm font-bold mb-2"
          htmlFor="nome"
        >
          Nome
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nome"
            placeholder="Inserisci il nome"
            type="text"
            maxLength={255}
            value={nome}
            required
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label
          className="text-black-800 block text-black-800 text-sm font-bold mb-2"
          htmlFor="colore"
        >
          Colore
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="colore"
            placeholder="Inserisci il colore"
            type="color"
            maxLength={255}
            value={colore}
            required
            onChange={(e) => setColore(e.target.value)}
          />
        </label>

        <label
          className="text-black-800 block text-black-800 text-sm font-bold mb-2"
          htmlFor="prezzo"
        >
          Prezzo
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="prezzo"
            placeholder="Inserisci il prezzo"
            type="text"
            maxLength={255}
            value={prezzo}
            required
            onChange={(e) => setPrezzo(e.target.value)}
          />
        </label>

        <label
          className="text-black-800 block text-black-800 text-sm font-bold mb-2"
          htmlFor="data"
        >
          Data di produzione
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="data"
            placeholder="Inserisci data produzione"
            type="date"
            maxLength={255}
            value={dataProd}
            required
            onChange={(e) => setDataProd(e.target.value)}
          />
        </label>

        <label
          className="text-black-800 block text-black-800 text-sm font-bold mb-2"
          htmlFor="quantità"
        >
          Quantità
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="quantità"
            placeholder="Inserisci la quantità"
            type="number"
            maxLength={255}
            value={qta}
            required
            onChange={(e) => setQta(e.target.value)}
          />
        </label>

        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="mt-2 bg-fuchsia-500 hover:bg-fuchsia-700 border-white text-rose-50 border-solid border-2 font-bold  w-full rounded-md py-3"
          type="submit"
        >
          <BsFillBagPlusFill style={{ fontSize: "24px" }} />{" "}
          <span style={{ marginLeft: "8px" }}>Aggiungi borsa</span>
        </button>
      </form>
    </div>
  );
};

export default BagAdd;
