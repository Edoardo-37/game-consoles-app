import LazyImageObserver from "../components/LazyImageObserver";
import SideBar from "../components/SideBar";
import ThemeController from "../components/ThemeController";
import Navbar from "../components/Navbar";
import microsoftSidebarTitles from "../constants/SidebarContent/microsoftSidebarTitles";
import SezioneConsole from "../components/SezioneConsole";
import microsoftConsoles from "../constants/microsoftConsoles";
import Footer from "../components/Footer";

const Microsoft = () => {
  return (
    <>
      <LazyImageObserver />
      <header>
        <Navbar />
      </header>
      <main>
        <div className="xl:grid grid-cols-[280px_1fr]">
          <SideBar sideBarSections={microsoftSidebarTitles} />
          <div className="col-start-2 px-[2rem] md:px-[6rem]">
            <h1 className="font-bold mb-10 text-5xl md:text-6xl">
              Tutte le console Microsoft Xbox: la storia completa
            </h1>
            <img
              className="not-loaded w-[100%] h-auto aspect-[16/9] object-cover
          rounded-2xl text-base-content text-lg"
              src="/src/assets/microsoftPage/microsoftPageIntro-low.jpg"
              data-lazy="/src/assets/microsoftPage/microsoftPageIntro.jpg"
              loading="lazy"
              alt="Immagine che ritrae l'evoluzione delle console Microsoft Xbox"
              title="Immagine ritraente l'evoluzione delle console Microsoft Xbox"
            />
            <ThemeController />
            <p className=" text-xl ps-[18px] border-s-4 border-s-accent">
              <span className="text-2xl text-success font-bold">Xbox </span> è
              uno dei tre marchi di console più riconosciuti sul mercato. Dal
              2001, Microsoft ha offerto console innovative con caratteristiche
              uniche per ogni uscita. Quello che un tempo era un marchio
              sconosciuto è ora un nome familiare e di spicco, con l'espansione
              verso TV, contenuti multimediali ed abbonamenti. Ripercorriamo
              quindi la storia delle console Xbox.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Quante console sono esistite?
            </h2>
            <p className="text-xl">
              In totale, sono state prodotte <b>9 console</b> Xbox, suddivise in
              quattro generazioni diverse. La prima Xbox venne lanciata nel 2001
              e da allora Microsoft rilasciò nuove console con nuove
              funzionalità hardware e tecnologie cercando di sorpassare i
              concorrenti del periodo.{" "}
              <u className="decoration-accent">NOTA:</u> Questo elenco include
              le revisioni delle console; modelli aggiornati con varie
              ottimizzazioni e migliorie rispetto agli originali.
            </p>
            <SezioneConsole consoleBrandList={microsoftConsoles} />
            <div className="flex justify-center my-10 text-2xl font-bold">
              <a
                title="Torna all'inizio della sezione console Microsoft"
                className="p-5 rounded-3xl border-5 border-success"
                href="#0"
              >
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

export default Microsoft;
