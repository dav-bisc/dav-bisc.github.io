import React, { useState } from "react";
//import { Navigate } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import pink1_t from "../images/pink1.jpg";
import pink1 from "../images/pink1b.jpg";
import red1 from "../images/red1.jpg";
import red1_t from "../images/red1t.jpg";
import logo from "../images/logo192.png";







const Prodotti = () => {
 /*   const [redirectTo, setRedirectTo] = useState(null);

    if (redirectTo) {
        return <Navigate to={redirectTo} />;
      }
*/


      return (

        <div>

            <h1>I nostri prodotti</h1>
            <PhotoProvider>
          <PhotoView src={pink1}>
            <img src= {pink1_t} alt="La nostra borsa pink" title="Borsa pink" />
            
          </PhotoView>
          <p>Borsa pink</p>
          <PhotoView src={red1}>
          <img src= {red1_t} alt="La nostra borsa red" title="Borsa red" />

        </PhotoView>
        <p>Borsa red</p>
        </PhotoProvider>
        </div>
      );
}

export default Prodotti;