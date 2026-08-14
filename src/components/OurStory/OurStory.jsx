import history from "../../data/history";
import "./OurStory.css";
import ScrollReveal
  from "../ScrollReveal/ScrollReveal";
function OurStory() {
  return (
    <section className="story-section" id="story">
    <ScrollReveal>
      <div className="story-container">

        {/* Heading */}

        <div className="story-heading">

          <div className="section-label">
            OUR STORY
          </div>

          <h2 className="section-title">
            A Journey of
            <span> Taste & Tradition</span>
          </h2>

          <p className="section-description">
            Every shop has a story. Ours is built around
            tradition, family, food and the people who
            have been part of our journey.
          </p>

        </div>

        {/* Timeline */}

        <div className="story-timeline">

          <div className="timeline-line"></div>

          {history.map((item, index) => (

            <div
              className={`story-item ${
                index % 2 === 0
                  ? "story-left"
                  : "story-right"
              }`}
              key={item.id}
            >

              <div className="story-content">

                <div className="story-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>

              <div className="story-image">

                <img
                  src={item.image}
                  alt={item.title}
                />

              </div>

              <div className="timeline-dot">
                <span></span>
              </div>

            </div>

          ))}

        </div>

        {/* Bottom quote */}

        <div className="story-quote">

          <span className="quote-mark">
            “
          </span>

          <p>
            Good food creates memories,
            and memories become traditions.
          </p>

          <span className="quote-line"></span>

          <small>
            SHREEJI NAMKEENS
          </small>

        </div>

      </div>
</ScrollReveal>
    </section>
  );
}

export default OurStory;