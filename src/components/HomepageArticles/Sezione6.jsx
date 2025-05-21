import React from "react";
import PageLinks from "../PageLinks";

const Sezione6 = () => {
  return (
    <article>
      <h2 id="5" className="font-bold text-3xl md:text-4xl">
        Tutte le Console di Sony, Microsoft e Nintendo
      </h2>
      <p className="text-xl">
        Ogni console ha segnato un’epoca e rivoluzionato il modo di giocare.
        Visita le pagine dedicate alla storia delle 3 principali
        aziende produttrici di console; approfondendole dalle prime prodotte fino a quelle odierne. Vai alla sezione:
      </p>
      <div className="text-2xl flex flex-col gap-2 justify-center items-center my-10 lg:flex-row lg:gap-10">
        <PageLinks />
      </div>
    </article>
  );
};

export default Sezione6;
