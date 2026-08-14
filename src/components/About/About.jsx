import shopInfo from "../../data/shopInfo";
import "./About.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

function About() {
  return (
    <section className="about-section" id="about">
        <ScrollReveal>
         <div className="about-container">

            {/* Image Side */}
            <div className="about-image-area">

            <div className="about-image-main">
                <img
                src="/images/gallery/shop-1.jpeg"
                alt="Shreeji Namkeens Shop"
                />
            </div>

            <div className="about-small-image">
                <img
                src="/images/gallery/shop-2.jpg"
                alt="Shreeji Namkeens"
                />
            </div>

            <div className="about-experience">
                <span>✦</span>

                <strong>
                Tradition
                </strong>

                <small>
                & Taste
                </small>
            </div>

            </div>

            {/* Content Side */}
            <div className="about-content">

            <div className="about-label">
                ABOUT US
            </div>

            <h2>
                A Taste That
                <span>Brings People Together</span>
            </h2>

            <p className="about-intro">
                Welcome to {shopInfo.name}, a place where
                traditional taste and quality come together.
            </p>

            <p>
                From delicious sweets to crispy namkeens,
                Shreeji Namkeens represents the love for
                authentic flavours and the joy of sharing
                good food with family and friends.
            </p>

            <p>
                Our journey is built around tradition,
                consistency and the trust of our customers.
                Every product reflects the values that make
                our shop special.
            </p>

            <div className="about-features">

                <div className="about-feature">
                <div className="feature-icon">
                    ✦
                </div>

                <div>
                    <h4>Traditional Taste</h4>

                    <p>
                    Flavours inspired by tradition.
                    </p>
                </div>
                </div>

                <div className="about-feature">
                <div className="feature-icon">
                    ✦
                </div>

                <div>
                    <h4>Quality & Freshness</h4>

                    <p>
                    Made with care and attention.
                    </p>
                </div>
                </div>

                <div className="about-feature">
                <div className="feature-icon">
                    ✦
                </div>

                <div>
                    <h4>Customer Trust</h4>

                    <p>
                    Loved by generations of customers.
                    </p>
                </div>
                </div>

                <div className="about-feature">
                <div className="feature-icon">
                    ✦
                </div>

                <div>
                    <h4>Made With Care</h4>

                    <p>
                    Every item is prepared with care.
                    </p>
                </div>
                </div>

            </div>

            <a
                href="#story"
                className="about-story-button"
            >
                Discover Our Story
                <span>→</span>
            </a>

            </div>

        </div>
    </ScrollReveal>
    </section>
  );
}

export default About;