import "./Footer.css";

function Footer() {

  const facebookLink =
    "https://www.facebook.com/ShreejiNamkins/";

  const instagramLink =
    "YOUR_INSTAGRAM_LINK_HERE";

  const googleMapsLink =
    "https://share.google/Xezb3FM6v6oZhR3xc";

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Main Footer */}

        <div className="footer-main">

          {/* Brand */}

          <div className="footer-brand">

            <a
              href="#home"
              className="footer-logo"
            >

              <div className="footer-logo-symbol">
                S
              </div>

              <div>

                <strong>
                  SHREEJI
                </strong>

                <span>
                  NAMKEENS
                </span>

              </div>

            </a>

            <p>
              A journey of taste, tradition and
              memories. Discover the story behind
              Shreeji Namkeens.
            </p>

          </div>

          {/* Quick Links */}

          <div className="footer-column">

            <h3>
              Quick Links
            </h3>

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

          </div>

          {/* Explore */}

          <div className="footer-column">

            <h3>
              Explore
            </h3>

            <a href="#video">
              Our Video
            </a>

            <a href="#reviews">
              Customer Reviews
            </a>

            <a href="#contact">
              Contact Us
            </a>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find Us
            </a>

          </div>

          {/* Social */}

          <div className="footer-column">

            <h3>
              Connect
            </h3>

            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>

            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Maps
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Shreeji
            Namkeens. All rights reserved.
          </p>

          <p>
            Made with ❤️ for tradition & taste.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;