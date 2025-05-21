const ConsoleCard = ({ consoleInfo }) => {
  const {
    id,
    name,
    release,
    srcLow,
    srcHigh,
    altText,
    imgTitle,
    description,
    bestGamesList,
  } = consoleInfo;
  return (
    <>
      <article>
        <h2 id={id} className="font-bold text-3xl md:text-4xl">
          {name} - {release}
        </h2>
        <img
          className="not-loaded max-w-full h-auto aspect-[16/9] drop-shadow-md object-cover
            rounded-2xl text-base-content text-lg md:max-w-[80%]"
          src={srcLow}
          data-lazy={srcHigh}
          loading="lazy"
          alt={altText}
          title={imgTitle}
        />
        <div className="italic font-[Sora] mt-[8px]">
          {name} - {release}
        </div>
        {description}
        <ul className="flex flex-col gap-y-[0.5rem] text-lg my-10 italic list-disc list-inside lg:grid grid-cols-2 gap-x-10 gap-y-5 px-5 ">
          {bestGamesList?.map((game, i) => {
            return <li key={i}>{game}</li>;
          })}
        </ul>
      </article>
    </>
  );
};

export default ConsoleCard;
