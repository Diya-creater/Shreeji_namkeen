import { useEffect, useRef, useState } from "react";

import "./ScrollReveal.css";

function ScrollReveal({
  children,
  className = "",
}) {

  const elementRef = useRef(null);

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {

    const element =
      elementRef.current;

    if (!element) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            setVisible(true);

            observer.unobserve(element);

          }

        },
        {
          threshold: 0.12,
        }
      );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };

  }, []);

  return (
    <div
      ref={elementRef}
      className={
        visible
          ? `scroll-reveal visible ${className}`
          : `scroll-reveal ${className}`
      }
    >
      {children}
    </div>
  );
}

export default ScrollReveal;