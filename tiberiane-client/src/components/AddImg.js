import React, { useState, useEffect } from "react";
import { BsFileEarmarkImage, BsCheck } from "react-icons/bs";
import secureLocalStorage from "react-secure-storage";

const ImgAdd = (props) => {
  const [nome, setNome] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [slideshow, setSlideshow] = useState(false);
  const [prodPage, setProdPage] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [foto, setFoto] = useState("");

  useEffect(() => {
    if (props.loadImgs === true) {
      // Invoke your function when myProp changes to true
      handleImgAdd();
    }
  }, [props.loadImgs]);

  const handleImgAdd = async (event) => {
    const formData = new FormData();
    formData.append("file", foto);
    formData.append("nome", nome);
    formData.append("descrizione", descrizione);
    formData.append("prodPage", prodPage);
    formData.append("bagID", props.bagID);
    formData.append("slideshow", slideshow);

    const response = await fetch("http://localhost:6868/admin/addImg", {
      method: "POST",
      headers: {
        authorization: `Bearer ${secureLocalStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: formData,
    });
    const result = await response.json();
    console.log("🚀 ~ file: AddImg.js:41 ~ handleImgAdd ~ result:", result);
  };

  const handleSlideshowChange = (event) => {
    setSlideshow(event.target.checked ? true : false);
  };

  const handleProdPageChange = (event) => {
    setProdPage(event.target.checked ? true : false);
  };

  const handleImg = (event) => {
    setFoto(event.target.files[0]);
  };

  return (
    <div>
      <div>
        <h2>{props.imgCount}</h2>
      </div>
      <section className="mt-10 bg-rose-300 shadow-md rounded-3xl px-6 pt-6 pb-8 mb-4 flex justify-center">
        {confirmed ? (
          <BsCheck style={{ fontSize: "24px" }} />
        ) : (
          <section className="w-full max-w-lg">
            <label
              className="text-black-800 block text-black-800 text-sm font-bold mb-2"
              htmlFor="nome"
            >
              Nome immagine
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nome"
                placeholder="Nome dell'immagine"
                type="text"
                maxLength={45}
                value={nome}
                required
                onChange={(e) => setNome(e.target.value)}
              />
            </label>

            <label
              className="text-black-800 block text-black-800 text-sm font-bold mb-2"
              htmlFor="colore"
            >
              Descrizione
              <textarea
                className="resize-y w-full rounded-md text-black"
                placeholder="Una breve descrizione dell'immagine..."
                type="text"
                maxLength={255}
                value={descrizione}
                onChange={(e) => setDescrizione(e.target.value)}
              />
            </label>

            <label
              className="text-black-800 block text-black-900 text-sm font-bold mb-2"
              htmlFor="slideshowSwitch"
            >
              Mostra nello slideshow
              <label className="switch">
                <input
                  type="checkbox"
                  id="slideshowSwitch"
                  checked={slideshow === true}
                  onChange={handleSlideshowChange}
                  style={{ transform: "scale(1.5)", marginLeft: "8px" }}
                />
                <span className="switch__slider" />
              </label>
            </label>

            {props.displayInProdPageOption === false ? (
              " "
            ) : (
              <label
                className="text-black-800 block text-black-900 text-sm font-bold mb-2"
                htmlFor="slideshowSwitch"
              >
                Includi nella pagina prodotto associata
                <label className="switch">
                  <input
                    type="checkbox"
                    id="slideshowSwitch"
                    checked={prodPage === true}
                    onChange={handleProdPageChange}
                    style={{ transform: "scale(1.5)", marginLeft: "8px" }}
                  />
                  <span className="switch__slider" />
                </label>
              </label>
            )}
            <label
              className="text-black-800 block text-black-600 text-sm font-bold mb-2"
              htmlFor="foto"
            >
              Immagine
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="foto"
                type="file"
                name="file"
                required
                onChange={handleImg}
              />
            </label>

            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="mt-2 bg-fuchsia-500 hover:bg-fuchsia-700 border-white text-rose-50 border-solid border-2 font-bold  w-full rounded-md py-3"
              type="button"
              onClick={() => setConfirmed(true)}
            >
              <BsFileEarmarkImage style={{ fontSize: "24px" }} />{" "}
              <span style={{ marginLeft: "8px" }}>Conferma immagine</span>
            </button>
          </section>
        )}
      </section>
    </div>
  );
};

export default ImgAdd;
