import { useTranslation } from "react-i18next";
import ContactDetails from "../components/contactDetails";
import Header from "../components/header";
const Contatti = () => {
  const { t } = useTranslation();
  const head = Header(t('contacts.msg'))
const contGab = ContactDetails("Gabriella Domizio", "gabrielladomizio@gmail.com", "3331112223");
  return (
    <div>
      {head}

      <div className="container mx-auto font-serif antialiased italic font-weight-600 tracking-wide line-height: 2rem text-center text-slate-700 bg-opacity-75 bg-gray-300 p-4 rounded-lg">
      <h3>Gabriella Domizio</h3>
      {contGab}
      
      
      </div>

    </div>
  );
};

export default Contatti;
