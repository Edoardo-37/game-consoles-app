import ThemeController from "./components/ThemeController";
import LazyImageObserver from "./components/LazyImageObserver";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import homeSidebarTitles from "./constants/SidebarContent/homeSidebarTitles";
import IntroBody from "./components/MainArticleSections/IntroBody";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <LazyImageObserver />
      <header>
        <Navbar />
      </header>
      <main>
        <div className="xl:grid grid-cols-[280px_1fr]">
          <SideBar sideBarSections={homeSidebarTitles} />
          <div className="col-start-2 px-[2rem] md:px-[6rem]">
            <h1 id="hero" className="font-bold text-5xl mb-[24px] md:text-6xl">
              La storia delle console videoludiche: dagli albori ai successi di
              Nintendo, Sony e Microsoft
            </h1>
            <p className="text-sm font-bold text-[#969696] mb-[8px]">
              30 Aprile 2025 | Edoardo Massimetti
            </p>
            <div className="divider divider-secondary"></div>
            <ThemeController />
            <p className="text-xl ps-[18px] border-s-4 border-s-accent">
              Scopri la storia e l’evoluzione delle console videoludiche; dalle
              origini ai modelli più recenti di{" "}
              <b> Nintendo, Sony e Microsoft</b> con informazioni e i giochi che
              hanno segnato maggiormente ogni piattaforma.
            </p>
            <IntroBody />
            <div className="flex justify-center my-10 text-2xl font-bold">
              <a
                title="Torna ad inizio pagina"
                className="p-5 rounded-3xl border-5 border-accent"
                href="#hero"
              >
                Torna ad inizio pagina
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
