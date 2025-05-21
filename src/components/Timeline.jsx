const Timeline = ({ content }) => {
  return (
    <ul className="timeline gap-0 timeline-snap-icon max-md:timeline-compact timeline-vertical">
      {content.map((el) => (
        <li key={el.id} className="mb-10">
          <div
            className={`${
              el.id % 2 == 0
                ? "timeline-start mx-5 my-10 md:text-end"
                : "timeline-end mx-5 my-10"
            }`}
          >
            <time className="font-mono italic text-xl">{el.year}</time>
            <div className="font-black text-2xl mb-5">{el.title}</div>
            <p className="base-paragraph text-lg">{el.text}</p>
          </div>
          <hr className="bg-accent" />
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
