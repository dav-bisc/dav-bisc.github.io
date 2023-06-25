//import React, { useState } from "react";
//import { Navigate } from "react-router-dom";
import Header from "../components/header";
import { useTranslation } from "react-i18next";
const Prodotti = () => {
  /*   const [redirectTo, setRedirectTo] = useState(null);

    if (redirectTo) {
        return <Navigate to={redirectTo} />;
      }
*/
  const { t } = useTranslation();
  const head = Header(t("products.p1"));
  const handleTest = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:6868/public/serverTest", {
      method: "GET",
    });
    const result = await response.json();
    console.log("🚀 ~ file: Prodotti.js:21 ~ handleTest ~ result:", result);
  };
  return (
    <div>
      {head}
      <div className="min-h-screen">
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={handleTest}
          className="mt-2 bg-blue-500 hover:bg-blue-700 border-white text-rose-50 border-solid border-2 font-bold  w-full rounded-md py-3"
          type="button"
        >
          Test
        </button>
      </div>
    </div>
  );
};

export default Prodotti;
