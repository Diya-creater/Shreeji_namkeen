import { useEffect, useState } from "react";

import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={
        scrolled
          ? "navbar scrolled"
          : "navbar"
      }
    >

      <div className="navbar-container">

        {/* Logo */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src="/images/logo/shreeji-logo.png"
            alt="Shreeji Namkeens"
            className="navbar-logo-image"
          />
        </a>

        {/* Desktop Navigation */}

        <nav className="desktop-nav">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#story">
            Our Story
          </a>

          <a href="#products">
            Products
          </a>

          <a href="#gallery">
            Gallery
          </a>

          <a href="#video">
            Video
          </a>

          <a href="#reviews">
            Reviews
          </a>

          <a
            href="#contact"
            className="nav-contact"
          >
            Visit Us
          </a>

        </nav>

        {/* Mobile Button */}

        <button
          className={
            menuOpen
              ? "menu-toggle open"
              : "menu-toggle"
          }
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>

      {/* Mobile Navigation */}

      <nav
        className={
          menuOpen
            ? "mobile-nav open"
            : "mobile-nav"
        }
      >

        <a
          href="#home"
          onClick={closeMenu}
        >
          Home
        </a>

        <a
          href="#about"
          onClick={closeMenu}
        >
          About
        </a>

        <a
          href="#story"
          onClick={closeMenu}
        >
          Our Story
        </a>

        <a
          href="#products"
          onClick={closeMenu}
        >
          Products
        </a>

        <a
          href="#gallery"
          onClick={closeMenu}
        >
          Gallery
        </a>

        <a
          href="#video"
          onClick={closeMenu}
        >
          Video
        </a>

        <a
          href="#reviews"
          onClick={closeMenu}
        >
          Reviews
        </a>

        <a
          href="#contact"
          onClick={closeMenu}
        >
          Visit Us
        </a>

      </nav>

    </header>
  );
}

export default Navbar;