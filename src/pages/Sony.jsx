import { useEffect } from "react";
import SideBar from "../components/SideBar";
import ThemeController from "../components/ThemeController";
import Navbar from "../components/Navbar";
import sonySidebarTitles from "../constants/SidebarContent/sonySidebarTitles";
import SezioneConsole from "../components/SezioneConsole";
import sonyConsoles from "../constants/sonyConsoles";
import Footer from "../components/Footer";

const Sony = () => {
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
          <SideBar sideBarSections={sonySidebarTitles} />
          <div className="col-start-2 px-[2rem] md:px-[6rem]">
            <h1 className="font-bold mb-10 text-5xl md:text-6xl">
              Tutte le console Sony Playstation: la storia completa
            </h1>
            <img
              className="not-loaded w-[100%] h-auto aspect-[16/9] object-cover
          rounded-2xl text-base-content text-lg"
              src="/src/assets/sonyPage/sonyPageIntro-low.avif"
              data-lazy="/src/assets/sonyPage/sonyPageIntro.avif"
              loading="lazy"
              alt="Immagine che ritrae l'evoluzione delle console Sony Playstation"
              title="Immagine ritraente l'evoluzione delle console Sony Playstation"
            />
            <ThemeController />
            <p className=" text-xl ps-[18px] border-s-4 border-s-accent">
              <span className="text-2xl text-info font-bold">PlayStation</span>{" "}
              è uno dei marchi più riconoscibili nella storia dei videogiochi:
              da quando è nata essa è ancora uno dei pilastri fondamentali
              dell'industria videoludica. Negli ultimi trent'anni sono state
              lanciate numerose console, tra cui revisioni e console portatili.
              Mentre l'azienda celebra 30 anni dal lancio della sua prima
              console (1994-2024), facciamo un salto indietro nel tempo e
              ripercorriamo la storia della PlayStation.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Quante console sono esistite?
            </h2>
            <p className="text-xl">
              In totale, sono state lanciate <b> 14 console</b> PlayStation dal
              lancio della prima nel 1995 in Nord America.{" "}
              <u className="decoration-accent">NOTA:</u> l'elenco
              include i modelli di console con revisione Slim e le due console
              portatili PlayStation principali rilasciate. Le date di rilascio
              fanno riferimento al Giappone.
            </p>
            <SezioneConsole consoleBrandList={sonyConsoles} />
            <div className="flex justify-center my-10 text-2xl font-bold">
              <a title="Torna all'inizio della sezione console Sony" className="p-5 rounded-3xl border-5 border-info" href="#0">
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

export default Sony;