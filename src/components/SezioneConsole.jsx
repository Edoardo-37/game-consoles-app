import ConsoleCard from "./ConsoleCard";

const SezioneConsole = ({consoleBrandList}) => {
  return (
    <section aria-label="console-section">
      {consoleBrandList.map((el) => {
        return (
          <ConsoleCard key={el.id} consoleInfo={el} />
        );
      })}
    </section>
  );
};
export default SezioneConsole;
