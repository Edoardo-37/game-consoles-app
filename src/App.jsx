import { useEffect } from "react";
import ThemeController from "./components/ThemeController";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import homeSidebarTitles from "./constants/SidebarContent/homeSidebarTitles";
import Sezione1 from "./components/HomepageArticles/Sezione1";
import Sezione2 from "./components/HomepageArticles/Sezione2";
import Sezione3 from "./components/HomepageArticles/Sezione3";
import Sezione4 from "./components/HomepageArticles/Sezione4";
import Sezione5 from "./components/HomepageArticles/Sezione5";
import Sezione6 from "./components/HomepageArticles/Sezione6";
import Footer from "./components/Footer";

function App() {
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
            <Sezione1 />
            <Sezione2 />
            <Sezione3 />
            <Sezione4 />
            <Sezione5 />
            <Sezione6 />
            <div className="flex justify-center my-10 text-2xl font-bold">
              <a title="Torna ad inizio pagina" className="p-5 rounded-3xl border-5 border-accent" href="#hero">
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