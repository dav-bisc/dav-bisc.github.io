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
const head = Header(t('products.p1'))
  return (
    <div>
      {head}
      <div className="min-h-screen">

      </div>
    </div>
  );
};

export default Prodotti;
