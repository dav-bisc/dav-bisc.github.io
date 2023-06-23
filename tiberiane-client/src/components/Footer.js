import { useTranslation } from "react-i18next";
import "../css/Footer.css";
const Footer = () => {
  const { t } = useTranslation();
  const mailToLink = `mailto:davide.biscardi@proton.me?subject=${encodeURIComponent(
    t("contacts.subj")
  )}&body=${encodeURIComponent(t("contacts.body"))}`;
  return (
    <div className="footer font-serif antialiased italic font-weight-600 ">
      <p>{t("footer.msg")}</p>
      <a href={mailToLink} className="text-slate-800">
        {t("contacts.emailProp")}
      </a>
    </div>
  );
};

export default Footer;
