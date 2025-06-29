import { useEffect } from "react";

const LazyImageObserver = () => {
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
  return null;
};

export default LazyImageObserver;