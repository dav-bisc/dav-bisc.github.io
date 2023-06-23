import InstagramEmbed from "../components/instaEmbed";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
import "../css/Social.css";
const Social = () => {
  const { t } = useTranslation();
  const head = Header(t("social.msg"));
  return (
    <div>
      {head}
      <section className="grid-section flex flex-wrap lg:grid lg:justify-center">
        <div className="ml-4 sm:ml-0 sm:w-full">
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftiberianebags%2Fposts%2Fpfbid0KWP4A95SUutksYrsk6SdcfLpk8BHhYgb7BfNtb7BVu3U9kWURsCtEAvvGQTa2kqEl&show_text=true&width=500"
            width="500"
            height="571"
            title="Pagina instagram"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>

        <div className="col-start-3">
          <InstagramEmbed />
        </div>
      </section>
    </div>
  );
};

export default Social;
