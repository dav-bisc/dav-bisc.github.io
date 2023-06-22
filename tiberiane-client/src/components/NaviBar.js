//import React, { useState } from "react";
//import { Navigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import "../css/NaviBar.css";

const NaviBar = () => {
/*
const [redirectTo, setRedirectTo] = useState(null);

if (redirectTo) {
    return <Navigate to={redirectTo} />;
  }
*/

  return (
    <>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li style={{ marginRight: "10px" }}>
            <Link to="/home">Home</Link>
          </li>
          <li style={{ marginRight: "10px" }}>
            <Link to="/prodotti">Prodotti</Link>
          </li>
          <li style={{ marginRight: "10px" }}>
        <Link to="/contatti">Contatti</Link>
        </li>
        <li style={{ marginRight: "10px" }}>
        <Link to="/chisiamo">Chi siamo</Link>
        </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
 
 
}

export default NaviBar;