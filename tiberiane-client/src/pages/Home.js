//import React, { useState } from "react";
//import { Navigate } from "react-router-dom";
import InstagramEmbed from "../components/instaEmbed";

const Home = () => {
 /*   const [redirectTo, setRedirectTo] = useState(null);

    if (redirectTo) {
        return <Navigate to={redirectTo} />;
      }
*/

      return (

        <div>
            <h1>Benvenuto su Tiberiane Bags</h1>
            <h2>ATTENZIONE! Il sito web è in fase di sviluppo.</h2>
            <h2>Segui i nostri canali social:</h2>



     
<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftiberianebags%2Fposts%2Fpfbid0KWP4A95SUutksYrsk6SdcfLpk8BHhYgb7BfNtb7BVu3U9kWURsCtEAvvGQTa2kqEl&show_text=true&width=500" width="500" height="571" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
<InstagramEmbed/>
        </div>
      );
}

export default Home;