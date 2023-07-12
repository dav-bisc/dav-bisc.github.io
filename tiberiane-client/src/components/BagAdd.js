import React, { useState } from "react";
import { BsFillBagPlusFill, BsPlusLg } from "react-icons/bs";
import secureLocalStorage from "react-secure-storage";
import AddImg from "./AddImg";

const BagAdd = () => {
  const [nome, setNome] = useState("");
  const [colore, setColore] = useState("");
  const [prezzo, setPrezzo] = useState("");
  const [qta, setQta] = useState("");
  const [dataProd, setDataProd] = useState("");
  const [productPage, setProductPage] = useState(false);
  const [imgCount, setImgCount] = useState(0);
  const [descrizione, setDescrizione] = useState("");
  const [loadImgs, setLoadImgs] = useState(false);
  const [bagID, setBagID] = useState("");

  const handleBagAdd = async (event) => {
    event.preventDefault();
    const data = { nome, colore, prezzo, qta, dataProd, productPage };
    const response = await fetch("http://localhost:6868/admin/addBag", {
      method: "POST",
      headers: {
        authorization: `Bearer ${secureLocalStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("🚀 ~ file: BagAdd.js:30 ~ handleBagAdd ~ result:", result);

    setLoadImgs(true);
    setBagID(result.bagID);
  };

  const handleImgAdd = (event) => {
    setImgCount(imgCount + 1);
  };

  const handleProductPageChange = (event) => {
    setProductPage(event.target.checked ? true : false);
  };

  return (
    <div>
      <section className="mt-10 bg-rose-200 shadow-md rounded-3xl px-6 pt-6 pb-8 mb-4 flex justify-center">
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

          <label
            className="text-black-800 block text-black-900 text-sm font-bold mb-2"
            htmlFor="prodSwitch"
          >
            Mostra nella pagina prodotti
            <label className="switch">
              <input
                type="checkbox"
                id="prodSwitch"
                checked={productPage === true}
                onChange={handleProductPageChange}
                style={{ transform: "scale(1.5)", marginLeft: "8px" }}
              />
              <span className="switch__slider" />
            </label>
          </label>

          {productPage === false ? (
            " "
          ) : (
            <label
              className="mt-2 text-black-800 block text-black-800 text-sm font-bold mb-2"
              htmlFor="colore"
            >
              Descrizione nella pagina prodotti (max 500 caratteri)
              <textarea
                className="resize-y w-full rounded-md text-black"
                placeholder="Descrivi qui il prodotto..."
                type="text"
                maxLength={255}
                value={descrizione}
                onChange={(e) => setDescrizione(e.target.value)}
              />
            </label>
          )}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="mt-2 bg-fuchsia-500 hover:bg-fuchsia-700 border-white text-rose-50 border-solid border-2 font-bold  w-fit rounded-md py-3"
            type="button"
            onClick={handleImgAdd}
          >
            <BsPlusLg style={{ fontSize: "24px" }} />{" "}
            <span style={{ marginLeft: "8px", marginRight: "8px" }}>
              Aggiungi immagine
            </span>
          </button>
          <div>
            {Array.from({ length: imgCount }, (_, index) => (
              <AddImg
                displayInProdPageOption={productPage}
                imgCount={index + 1}
                loadImgs={loadImgs}
                key={index}
                bagID={bagID}
              />
            ))}
          </div>

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
            <span style={{ marginLeft: "8px" }}>Conferma borsa</span>
          </button>
        </form>
      </section>
    </div>
  );
};

export default BagAdd;
