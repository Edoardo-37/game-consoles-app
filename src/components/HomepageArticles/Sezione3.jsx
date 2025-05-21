import React from "react";

const Sezione3 = () => {
  return (
    <article>
      <h2 id="2" className="font-bold text-3xl md:text-4xl"> La crisi del 1983</h2>
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
        <b><u>La crisi del 1983</u></b> fu uno dei momenti più critici nella storia
        dell'industria videoludica: l'evento, percepito perlopiù in Nord
        America, ha avuto importanti conseguenze per molte aziende e segnato la
        fine della seconda generazione di console iniziata nel 1976.
      </p>
      <p className="text-xl">
        In quegli anni il mercato videoludico era{" "}
        <b>pieno di console e giochi di bassa qualità</b>. L'introduzione di
        nuovi titoli mal progettati, ha riempito gli scaffali nei negozi,
        riducendo enormemente l'interesse dei consumatori. Il gioco E.T.
        l'extraterrestre, ad esempio, per Atari 2600 fu creato in sole 6
        settimane risultando un fallimento commerciale.Subito dopo la crisi molte aziende dichiararono <b>bancarotta</b>: le
        entrate di Atari, principale vittima, diminuirono del e dovette
        licenziare il 30% dei dipendenti; altre aziende, come Magnavox e Mattel,
        abbandonarono del tutto il mercato.
      </p>

      <p className="text-xl">
        La crisi ebbe un impatto minore in Giappone ed Europa, dove il mercato
        videoludico continuò a crescere. Nel 1985, Nintendo ha introdotto il{" "}
        <b>Nintendo Entertainment System (NES)</b> nel mercato nordamericano,
        riportando l'industria in ripresa. Il successo del NES segnò l'inizio di
        una nuova era caratterizzata da giochi sviluppati con qualità superiore
        e maggior attenzione ai consumatori.
      </p>
      <p className="text-xl">
        Uno degli episodi più emblematici della crisi fu la sepoltura,
        confermata poi nel 2014 da un gruppo di archeologi, di milioni di
        cartucce di E.T. nel deserto del Nuovo Messico.
      </p>
    </article>
  );
};

export default Sezione3;
