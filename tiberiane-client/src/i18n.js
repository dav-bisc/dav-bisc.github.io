import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: `🌴 Explore the Enchantment of Capri with Our Handmade Bags! 🌴
            We are thrilled to introduce our collection of bags and accessories inspired by the island of Capri, a captivating place that exudes elegance, style, and timeless beauty.
            Every bag we create is a tribute to the unique atmosphere of Capri, with its crystal-clear sea, breathtaking landscapes, and effortless glamour. Our designers draw inspiration from the magic of this island to craft pieces that reflect its beauty and charm.
            We use vibrant colors, exquisite fabrics, and refined details to convey the essence of Capri in every product. Whether you desire a bag for a day at the beach or an elegant accessory for a special evening, you will find what you're looking for in our collection.
            Our handmade bags will make you feel as if you're strolling through the streets of Capri, immersing yourself in the island's exclusive atmosphere. You'll be able to carry a piece of this magical place with you wherever you go.
            Join us in discovering the wonders of Capri through our handmade bags. Follow us on social media or contact us directly to purchase a piece that will transport you on an exciting journey to the most enchanting island in the Mediterranean.`,
          },
          products: {
            p1: "Products",
          },
          contacts: {
            p1: "Contacts",
          },
          us: {
            p1: "Our group",
          },
          provWarning: {
            p1: "WARNING: the website is currently under development. Please be patient!",
          },
        },
      },
      ita: {
        translation: {
          description: {
            part1: `🌴 Esplora l'incanto di Capri con le nostre borse fatte a mano! 🌴
           Siamo entusiasti di presentarti la nostra collezione di borse e accessori ispirati all'isola di Capri, un luogo incantevole che evoca eleganza, stile e bellezza senza tempo.
           Ogni borsa che creiamo è un omaggio all'atmosfera unica di Capri, con il suo mare cristallino, i paesaggi mozzafiato e l'eleganza senza sforzo. Le nostre artigiane si ispirano alla magia di quest'isola per creare pezzi che riflettano la sua bellezza e il suo fascino.
           Utilizziamo colori vivaci, tessuti pregiati e dettagli raffinati per trasmettere l'essenza di Capri in ogni prodotto. Che tu desideri una borsa per una giornata al mare o un accessorio elegante per una serata speciale, troverai ciò che cerchi nella nostra collezione.
           Le nostre borse fatte a mano ti faranno sentire come se stessi passeggiando per le stradine di Capri, immergendoti nell'atmosfera esclusiva dell'isola. Sarai in grado di portare con te un pezzo di questo luogo magico ovunque tu vada.
           Unisciti a noi nella scoperta delle meraviglie di Capri attraverso le nostre borse fatte a mano. Seguici sui social media o contattaci direttamente per acquistare un pezzo che ti trasporterà in un viaggio emozionante verso l'isola più affascinante del Mediterraneo.`,
          },
          products: {
            p1: "Prodotti",
          },
          contacts: {
            p1: "Contatti",
          },
          us: {
            p1: "Chi siamo",
          },
          provWarning: {
            p1: "ATTENZIONE! Il sito web è in fase di sviluppo.",
          },
        },
      },
    },
  });

export default i18n;
