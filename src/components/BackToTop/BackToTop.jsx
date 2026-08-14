import { useEffect, useState } from "react";
import ScrollReveal
  from "../ScrollReveal/ScrollReveal";
import "./BackToTop.css";

function BackToTop() {

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setVisible(
        window.scrollY > 500
      );

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);

  const goToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  if (!visible) {
    return null;
  }

  return (
    <ScrollReveal>
        <button
        className="back-to-top"
        onClick={goToTop}
        aria-label="Back to top"
        >
        ↑
        </button>
    </ScrollReveal>
  );
}

export default BackToTop;