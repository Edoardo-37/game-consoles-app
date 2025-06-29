import Timeline from "../Timeline";
import { homepageTimelineContent } from "../../constants/homepageTimelineContent";
import GenerationsSection from "./GenerationsSection";
import PageLinks from "../PageLinks";

const IntroBody = () => {
  return (
    <>
    <article>
      <section aria-label="Spiegazione su cosa sono le console">
        <h2 id="0" className="font-bold text-3xl md:text-4xl">
          Cos'è una console?
        </h2>
        <img
          className="not-loaded w-[100%] h-auto aspect-[3/2]
            rounded-2xl md:w-[80%] text-base-content text-lg"
          src="/src/assets/homepage/wii-low.jpg"
          data-lazy="/src/assets/homepage/wii.jpg"
          loading="lazy"
          alt="una console di gioco Nintendo Wii posata su un tavolo di legno"
          title="Una console Nintendo Wii - 2006"
        />
        <div className="italic font-[Sora] mt-[8px]">Nintendo Wii - 2006</div>

        <p className="text-xl">
          <b>Le console videoludiche</b> sono dispositivi che hanno trasformato
          il concetto di intrattenimento nel corso dei decenni. Esse sono, in
          sostanza, computer specializzati nel riprodurre giochi, ma con
          l'obiettivo principale di essere
          <b> semplici da usare e accessibili</b>, sia economicamente sia lato
          UI, alla maggior parte delle persone.
        </p>
        <p className="text-xl">
          Ogni console è composta da un <b> controller</b>, che permette di
          interagire con il gioco e un
          <b> dispositivo principale</b> -<i> (la console vera e propria)</i> -
          che accoglie, installa ed esegue i giochi. Le console hanno unito
          milioni di persone nel mondo: Nintendo, Sony e Microsoft, con le loro
          iconiche console, hanno contribuito a creare una{" "}
          <b>
            <i>"cultura videoludica"</i>{" "}
          </b>{" "}
          che oggi è parte della nostra quotidianità.
        </p>
      </section>

      <section aria-label="Storia della nascita delle console">
        <h2 id="1" className="font-bold text-3xl md:text-4xl">
          Gli inizi
        </h2>
        <p className="text-xl">
          Tutto ha avuto inizio negli anni '70, quando le prime console
          domestiche, come l’Odyssey di Magnavox, portarono i videogiochi
          direttamente nelle case di milioni di persone anche se ancora in uno
          stato primordiale. È proprio da questa macchina che sono nate le
          fondamenta di un settore. Con l’arrivo di Nintendo e la sua console
          negli anni 80, grazie a Super Mario Bros e The Legend of Zelda, la
          console si è trasformata in un simbolo di cultura pop.
        </p>
        <p className="text-xl">
          Dagli anni '90 subentrarono Sony con la <b>PlayStation</b> e Microsoft
          con <b>l’Xbox</b>: si cercava di spingere la tecnologia sempre oltre i
          limiti e questo portò all’introduzione della grafica 3D, giochi sempre
          più complessi e connettività online, ecc, dando vita ad una
          competizione che ha definito il panorama videoludico moderno. Ogni
          generazione di console ha portato con se una serie di sviluppi, come i
          controller sempre più ergonomici e pregni di funzionalità e le
          esperienze in realtà virtuale.
        </p>
      </section>

      <section aria-label="Spiegazione sulla crisi videoludica del 1983">
        <h2 id="2" className="font-bold text-3xl md:text-4xl">
          {" "}
          La crisi del 1983
        </h2>
        <img
          className="not-loaded w-[100%] h-auto aspect-[3/2]
            rounded-2xl md:w-[80%] text-base-content text-lg"
          src="/src/assets/homepage/crisi83-low.jpg"
          data-lazy="/src/assets/homepage/crisi83.jpg"
          loading="lazy"
          alt="immagine ritarente l'iconico evento della sepoltura del videogioco E.T nel deserto del New Mexico"
          title="Evento della sepoltura del videogioco E.T nel deserto del New Mexico"
        />
        <div className="italic font-[Sora] mt-[8px]">
          Evento della sepoltura del videogioco E.T nel deserto del New Mexico -
          1983
        </div>

        <p className="text-xl">
          <b>
            <u>La crisi del 1983</u>
          </b>{" "}
          fu uno dei momenti più critici nella storia dell'industria
          videoludica: l'evento, percepito perlopiù in Nord America, ha avuto
          importanti conseguenze per molte aziende e segnato la fine della
          seconda generazione di console iniziata nel 1976.
        </p>
        <p className="text-xl">
          In quegli anni il mercato videoludico era{" "}
          <b>pieno di console e giochi di bassa qualità</b>. L'introduzione di
          nuovi titoli mal progettati, ha riempito gli scaffali nei negozi,
          riducendo enormemente l'interesse dei consumatori. Il gioco E.T.
          l'extraterrestre, ad esempio, per Atari 2600 fu creato in sole 6
          settimane risultando un fallimento commerciale.Subito dopo la crisi
          molte aziende dichiararono <b>bancarotta</b>: le entrate di Atari,
          principale vittima, diminuirono del e dovette licenziare il 30% dei
          dipendenti; altre aziende, come Magnavox e Mattel, abbandonarono del
          tutto il mercato.
        </p>

        <p className="text-xl">
          La crisi ebbe un impatto minore in Giappone ed Europa, dove il mercato
          videoludico continuò a crescere. Nel 1985, Nintendo ha introdotto il{" "}
          <b>Nintendo Entertainment System (NES)</b> nel mercato nordamericano,
          riportando l'industria in ripresa. Il successo del NES segnò l'inizio
          di una nuova era caratterizzata da giochi sviluppati con qualità
          superiore e maggior attenzione ai consumatori.
        </p>
        <p className="text-xl">
          Uno degli episodi più emblematici della crisi fu la sepoltura,
          confermata poi nel 2014 da un gruppo di archeologi, di milioni di
          cartucce di E.T. nel deserto del Nuovo Messico.
        </p>
      </section>

      <section aria-label="Elenco degli eventi più importanti durante la storia delle console videoludiche">
        <h2 id="3" className="font-bold text-3xl md:text-4xl">
          Gli eventi più importanti in ordine cronologico
        </h2>
        <p className="text-xl">
          Quali sono stati gli eventi più importanti che hanno segnato al storia
          del medium videoludico? Quali sono le console che hanno segnato la
          storia del gaming? Ecco una Timeline.
        </p>
        <Timeline content={homepageTimelineContent} />
      </section>

      <GenerationsSection />
      
      <section aria-label="Le 3 grandi aziende prodruttici di console e videogiochi ad oggi">
        <h2 id="5" className="font-bold text-3xl md:text-4xl">
          Tutte le Console di Sony, Microsoft e Nintendo
        </h2>
        <p className="text-xl">
          Ogni console ha segnato un’epoca e rivoluzionato il modo di giocare.
          Visita le pagine dedicate alla storia delle 3 principali aziende
          produttrici di console; approfondendole dalle prime prodotte fino a
          quelle odierne. Vai alla sezione:
        </p>
        <div className="text-2xl flex flex-col gap-2 justify-center items-center my-10 lg:flex-row lg:gap-10">
          <PageLinks />
        </div>
      </section>
    </article>
    </>
  );
};

export default IntroBody;
