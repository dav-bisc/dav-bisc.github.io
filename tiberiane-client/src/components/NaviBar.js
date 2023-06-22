//import React, { useState } from "react";
//import { Navigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "../css/NaviBar.css";
import { useTranslation } from "react-i18next";
const NaviBar = () => {
  /*
const [redirectTo, setRedirectTo] = useState(null);

if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }
*/

  const lngs = {
    en: { nativeName: "English" },
    ita: { nativeName: "Italiano" },
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li style={{ marginRight: "10px", flex: "1", textAlign: "center" }}>
            <Link to="/home">Home</Link>
          </li>
          <li style={{ marginRight: "10px", flex: "1", textAlign: "center" }}>
            <Link to="/prodotti">{t("products.p1")}</Link>
          </li>
          <li style={{ marginRight: "10px", flex: "1", textAlign: "center" }}>
            <Link to="/contatti">{t("contacts.p1")}</Link>
          </li>
          <li style={{ marginRight: "10px", flex: "1", textAlign: "center" }}>
            <Link to="/chisiamo">{t("us.p1")}</Link>
          </li>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                justifyContent: "flex-end",
                backgroundColor: "lightpink",
                border: "double",
                borderRadius: "rounded",
                borderWidth: "2px",
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
              {i18n.resolvedLanguage === lng ? (
                <i className="🇬🇧" />
              ) : (
                <i className="🇮🇹" />
              )}
            </button>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NaviBar;
