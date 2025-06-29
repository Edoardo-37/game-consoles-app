import { useState, useEffect } from "react";

const SideBar = ({ sideBarSections }) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll("h2");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // cleanup
  }, []);

  return (
    <div
      aria-label="side-content"
      className="hidden xl:block sticky top-[100px] ms-[1rem] mt-[1rem] h-[80dvh] bg-base-300 rounded-xl overflow-y-auto"
    >
      <ul className="font-[Sora] pl-5">
        <li>
          <p className="base-paragraph pt-[2rem] mb-5 text-xl font-bold">Indice</p>
        </li>
        {sideBarSections.map(({ id, title }) => (
          <li key={id} className="px-[1.25rem] py-[1rem] text-[#818181] text-md">
            <a
              href={`#${id}`}
              className={
                activeId === id ? "font-bold text-base-content" : ""
              }
            >
              - {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;