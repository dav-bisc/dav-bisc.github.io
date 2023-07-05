//import React, { useState } from "react";
//import { Navigate } from "react-router-dom";

import Header from "../components/header";
import SmartSlider from "react-smart-slider";
import { useTranslation } from "react-i18next";

const Home = () => {
  /*   const [redirectTo, setRedirectTo] = useState(null);

    if (redirectTo) {
        return <Navigate to={redirectTo} />;
      }
*/

  const head = Header("Tiberiane bags");
  const { t } = useTranslation();
  const DummyCaption = ({ caption }) => (
    <div
      style={{
        position: "absolute",
        right: 100,
        top: 250,
        fontSize: 38,
        padding: 55,
        border: "solid 1px",
      }}
    >
      {caption}
    </div>
  );

  const slidesArray = [
    {
      url: "https://imgur.com/RhF772K.jpg",

      // (Optional) Set if you want to add any content on your slide
      childrenElem: <DummyCaption caption="Pink sugar" />,
    },
    {
      url: "https://imgur.com/gG31qlx.jpg",
      childrenElem: <DummyCaption caption="Red" />,
    },
    {
      url: "https://imgur.com/moCeFDS.jpg",
      childrenElem: <DummyCaption caption="Russia" />,
    },
    {
      url: "https://imgur.com/klP3zNZ.jpg",
      childrenElem: <DummyCaption caption="Mirabella" />,
    },
    {
      url: "https://imgur.com/NywZorM.jpg",
      childrenElem: <DummyCaption caption="Boho chic" />,
    },
  ];

  return (
    <div>
      {head}
      <h2 className="text-rose-50">{t("provWarning.p1")}</h2>
      <div className="min-h-screen">
        <div className="container mx-auto font-serif antialiased italic font-weight-600 tracking-wide line-height: 2rem text-center text-slate-700 bg-opacity-100 bg-white bg- p-4 rounded-lg">
          <cite>{t("description.part1")}</cite>
        </div>
        <div className="relative mt-20">
          <div className="container mx-auto">
            <SmartSlider slides={slidesArray} autoSlide={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
