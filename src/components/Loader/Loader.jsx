import { useEffect } from "react";
import "./Loader.css";

function Loader({ onLoadingComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2000); // 10 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div className="loader">

      <div className="loader-logo-wrapper">
        <img
          src="/images/logo/shreeji-logo.png"
          alt="Shreeji Namkeens"
          className="loader-logo"
        />
      </div>

      <h2>SHREEJI NAMKEENS</h2>

      <p>Since 1959 • Taste & Tradition</p>

      <div className="loader-line">
        <span></span>
      </div>

      <small>Preparing something delicious...</small>

    </div>
  );
}

export default Loader;