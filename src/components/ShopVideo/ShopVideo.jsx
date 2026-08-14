import "./ShopVideo.css";
import ScrollReveal
  from "../ScrollReveal/ScrollReveal";
function ShopVideo() {
  return (
    <section
      className="shop-video-section"
      id="video"
    >
    <ScrollReveal>
      <div className="shop-video-container">

        {/* Heading */}

        <div className="shop-video-heading">

          <div className="section-label">
            WATCH OUR STORY
          </div>

          <h2 className="section-title">
            A Glimpse Into
            <span>Shreeji Namkeens</span>
          </h2>

          <p className="section-description">
            Take a look at Shreeji Namkeens through
            our video and discover a little more about
            the shop, its journey and its tradition.
          </p>

        </div>

        {/* Video */}

        <div className="youtube-wrapper">

          <iframe
            src="https://www.youtube.com/embed/Cej5nbGaoBg"
            title="Shreeji Namkeens"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

        </div>

        {/* YouTube Button */}

        <div className="video-button-wrapper">

          <a
            href="https://youtu.be/Cej5nbGaoBg"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-button"
          >
            <span>▶</span>
            Watch on YouTube
          </a>

        </div>

      </div>
    </ScrollReveal>
    </section>
  );
}

export default ShopVideo;