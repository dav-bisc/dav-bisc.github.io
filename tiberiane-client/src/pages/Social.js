import InstagramEmbed from "../components/instaEmbed";
import { useTranslation } from "react-i18next";
import Header from "../components/header";
const Social = () => {

    const { t } = useTranslation();
    const head = Header(t('social.msg'))
    return (
        <div>
                  {head}
      <section className="grid flex justify-center gap-5 bg-opacity-60 bg-slate-200">
     
     
     
     
     <div classname="ml-20">
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftiberianebags%2Fposts%2Fpfbid0KWP4A95SUutksYrsk6SdcfLpk8BHhYgb7BfNtb7BVu3U9kWURsCtEAvvGQTa2kqEl&show_text=true&width=500"
          width="500"
          height="571"
          title="Pagina instagram"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
     
     </div>
     
     
     <div className="col-start-3">
        <InstagramEmbed />
        </div>
      </section>
        </div>
    );
}

export default Social;