import React from "react";

const Sezione1 = () => {
  return (
    <article>
      <h2 id="0" className="font-bold text-3xl md:text-4xl">Cos'è una console?</h2>
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
        <b>Le console videoludiche</b> sono dispositivi che hanno trasformato il
        concetto di intrattenimento nel corso dei decenni. Esse sono, in
        sostanza, computer specializzati nel riprodurre giochi, ma con
        l'obiettivo principale di essere
        <b> semplici da usare e accessibili</b>
        , sia economicamente sia lato UI, alla maggior parte delle persone.
      </p>
      <p className="text-xl">
        Ogni console è composta da un <b> controller</b>, che permette di interagire con il gioco e un
        <b> dispositivo principale</b> -<i> (la console vera e propria)</i> -
        che accoglie, installa ed esegue i giochi. Le console hanno unito
        milioni di persone nel mondo: Nintendo, Sony e Microsoft, con le loro
        iconiche console, hanno contribuito a creare una <b><i>"cultura videoludica"</i> </b> che oggi è parte della nostra quotidianità.
      </p>
    </article>
  );
};

export default Sezione1;
