import { useTranslation } from "react-i18next";
import ContactDetails from "../components/contactDetails";
import Header from "../components/header";
import gPic from "../images/gabry_profile.jpg";
import rPic from "../images/rosa_profile.jpg";

const Contatti = () => {
  const { t } = useTranslation();
  const head = Header(t("contacts.msg"));
  const contGab = ContactDetails(
    "Gabriella Domizio",
    "gabriella.domizio@tiberianebags.it",
    "+393427629245",
    gPic
  );
  const contRosa = ContactDetails(
    "Rosa Domizio",
    "rosa.domizio@tiberianebags.it",
    "+393343305848",
    rPic
  );
  return (
    <div>
      {head}
      <div className="min-h-screen">
        <div className="container  mx-auto font-serif antialiased italic font-weight-600 tracking-wide line-height: 2rem text-center text-slate-700 bg-opacity-75 bg-gray-300 p-4 rounded-lg">
          <h3>Gabriella Domizio</h3>
          {contGab}
        </div>
        <div className="container  mx-auto font-serif antialiased italic font-weight-600 tracking-wide line-height: 2rem text-center text-slate-700 bg-opacity-75 bg-gray-300 p-4 rounded-lg">
          <h3>Rosa Domizio</h3>
          {contRosa}
        </div>
      </div>
    </div>
  );
};

export default Contatti;
