import shopInfo from "../../data/shopInfo";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-label">
            TRADITION • TASTE • TRUST
          </span>

          <h1>
            Authentic Taste,
            <span> Made With Tradition</span>
          </h1>

          <p>
            Discover the story, tradition and delicious taste
            of Shreeji Namkeens — bringing sweets and namkeens
            to our customers with care and authenticity.
          </p>

          <div className="hero-buttons">

            <a
              href="#story"
              className="primary-btn"
            >
              Discover Our Story
            </a>

            <a
              href={shopInfo.locationLink}
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Visit Our Shop
            </a>

          </div>

          <div className="hero-highlights">

            <div className="highlight">
              <span>✦</span>
              <div>
                <strong>Traditional</strong>
                <small>Authentic Taste</small>
              </div>
            </div>

            <div className="highlight">
              <span>✦</span>
              <div>
                <strong>Fresh</strong>
                <small>Quality Products</small>
              </div>
            </div>

            <div className="highlight">
              <span>✦</span>
              <div>
                <strong>Trusted</strong>
                <small>By Customers</small>
              </div>
            </div>

          </div>

        </div>

        <div className="hero-image-wrapper">

          <div className="hero-image-decoration"></div>

          <div className="hero-image">
            <img
              src="/images/hero/hero-main.jpg"
              alt="Shreeji Namkeens"
            />
          </div>

          <div className="hero-badge">
            <span>श्री</span>
            <p>
              Shreeji
              <br />
              Namkeens
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;