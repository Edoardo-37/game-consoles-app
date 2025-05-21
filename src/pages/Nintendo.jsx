import { useEffect } from "react";
import SideBar from "../components/SideBar";
import ThemeController from "../components/ThemeController";
import Navbar from "../components/Navbar";
import nintendoSidebarTitles from "../constants/SidebarContent/nintendoSidebarTitles";
import nintendoConsoles from "../constants/nintendoConsoles"
import SezioneConsole from "../components/SezioneConsole";
import Footer from "../components/Footer";

const Nintendo = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.lazy;
            image.onload = () => {
              image.classList.remove("not-loaded");
              image.classList.add("loaded");
            };
            observer.unobserve(image);
          }
        });
      },
      { threshold: 0.5 }
    );

    const images = document.querySelectorAll(".not-loaded");
    images.forEach((image) => {
      observer.observe(image);
    });

    return () => observer.disconnect(); // cleanup
  }, []);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="xl:grid grid-cols-[280px_1fr]">
          <SideBar sideBarSections={nintendoSidebarTitles} />
          <div className="col-start-2 px-[2rem] md:px-[6rem]">
            <h1 className="font-bold mb-10 text-5xl md:text-6xl">
              Tutte le console di Nintendo: la storia completa
            </h1>
            <img
              className="not-loaded w-[100%] h-auto aspect-[16/9]
          rounded-2xl text-base-content text-lg"
              src="/src/assets/nintendoPage/nintendoPageIntro-low.avif"
              data-lazy="/src/assets/nintendoPage/nintendoPageIntro.avif"
              loading="lazy"
              alt="Immagine con alcune delle console Nintendo più famose"
              title="Immagine ritraente alcune delle console Nintendo più famose"
            />
            <ThemeController />
            <p className=" text-xl ps-[18px] my-[60px] border-s-4 border-s-accent">
              <span className="text-error text-2xl font-bold">Nintendo</span>,
              quando si parla di videogiochi, rappresenta uno dei nomi più
              riconoscibili. Fin dagli albori, l'azienda è sempre stata capace
              ad innovare e creando sempre nuovi modi creativi per fruire in
              maniera sempre diversa, ma comunque divertente, il videogioco: la
              compagnia è conosciuta grazie alla sua preziosa libreria di IP che
              negli anni hanno saputo crescere generazioni di videogiocatori.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Quante console sono esistite?
            </h2>
            <p className="text-xl">
              Nella storia di Nintendo sono state lanciate
              <b> 32 console</b>. La Nintendo Switch 2,{" "}
              <i>in uscita il 5 Giugno 2025</i>, sarà la <b>33esima</b>. Vediamo
              ora quali sono state le console che hanno definito la storia di
              Nintendo nel settore gaming in ordine di uscita; dal 1977 al 2025.{" "}
              <u className="decoration-accent">NOTA:</u> le date di
              rilascio riportate sono Nord Americane; inoltre nella lista sono
              inclusi tutti i modelli di revisione usciti sia per le console
              portatili che domestiche.
            </p>
            <SezioneConsole consoleBrandList={nintendoConsoles} />
            <div className="flex justify-center my-10 text-2xl font-bold">
              <a title="Torna all'inizio della sezione console Nintendo" className="p-5 rounded-3xl border-5 border-error" href="#0">
                Torna ad inizio elenco
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Nintendo;