import React from "react";
import { homepageTimelineContent } from "../../constants/homepageTimelineContent";
import Timeline from "../Timeline";

const Sezione4 = () => {
  return (
    <article>
      <h2 id="3" className="font-bold text-3xl md:text-4xl">
        Gli eventi più importanti in ordine cronologico
      </h2>
      <p className="text-xl">
        Quali sono stati gli eventi più importanti che hanno segnato al storia
        del medium videoludico? Quali sono le console che hanno segnato la
        storia del gaming? Ecco una Timeline.
      </p>
      <Timeline content={homepageTimelineContent} />
    </article>
  );
};

export default Sezione4;
