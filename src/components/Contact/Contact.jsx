import "./Contact.css";
import ScrollReveal
  from "../ScrollReveal/ScrollReveal";
function Contact() {

  const googleMapsLink =
    "https://share.google/Xezb3FM6v6oZhR3xc";

  const facebookLink =
    "https://www.facebook.com/ShreejiNamkins/";

  const instagramLink =
  "https://www.instagram.com/shreejinamkins?igsh=dXBpdjl5M3p5Yzhs";

  return (
    <section
      className="contact-section"
      id="contact"
    >
    <ScrollReveal>
      <div className="contact-container">

        {/* Heading */}

        <div className="contact-heading">

          <div className="section-label">
            VISIT US
          </div>

          <h2 className="section-title">
            Come Experience
            <span>Our Tradition</span>
          </h2>

          <p className="section-description">
            Looking for traditional sweets and namkeens?
            Visit Shreeji Namkeens and experience the
            taste and tradition for yourself.
          </p>

        </div>

        {/* Contact Cards */}

        <div className="contact-grid">

          {/* Location */}

          <div className="contact-card">

            <div className="contact-icon">
              📍
            </div>

            <div>

              <span>
                LOCATION
              </span>

              <h3>
                Shreeji Namkeens
              </h3>

              <p>
                Visit our shop using the location
                provided below.
              </p>

              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Open Location →
              </a>

            </div>

          </div>

          {/* Jitesh */}

          <div className="contact-card">

            <div className="contact-icon">
              ☎
            </div>

            <div>

              <span>
                CONTACT
              </span>

              <h3>
                Jitesh Bajaniya
              </h3>

              <p>
                Contact us for shop-related
                information.
              </p>

              <a
                href="tel:9998238729"
                className="contact-link"
              >
                9998238729 →
              </a>

            </div>

          </div>

          {/* Manish */}

          <div className="contact-card">

            <div className="contact-icon">
              ☎
            </div>

            <div>

              <span>
                CONTACT
              </span>

              <h3>
                Manish Bajaniya
              </h3>

              <p>
                Contact us for shop-related
                information.
              </p>

              <a
                href="tel:8780056814"
                className="contact-link"
              >
                8780056814 →
              </a>

            </div>

          </div>

          {/* Siddharth */}

          <div className="contact-card">

            <div className="contact-icon">
              ☎
            </div>

            <div>

              <span>
                CONTACT
              </span>

              <h3>
                Siddharth Bajaniya
              </h3>

              <p>
                Contact us for shop-related
                information.
              </p>

              <a
                href="tel:9974311667"
                className="contact-link"
              >
                9974311667 →
              </a>

            </div>

          </div>

        </div>

        {/* Social Links */}

        <div className="social-box">

          <div>

            <span className="social-label">
              FOLLOW OUR JOURNEY
            </span>

            <h3>
              Stay Connected
            </h3>

          </div>

          <div className="social-buttons">

            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button facebook"
            >
              Facebook
            </a>

            <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="social-button instagram"
            >
            Instagram
            </a>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="social-button maps"
            >
              Google Maps
            </a>

          </div>

        </div>

      </div>
    </ScrollReveal>
    </section>
  );
}

export default Contact;