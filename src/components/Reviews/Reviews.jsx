import "./Reviews.css";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const reviews = [
  {
    id: 1,
    name: "Sam S",
    rating: 5,
    text: "Superb quality and delicious snacks and sweets. Love their products! You'll find almost all traditional Kutchi food items here. Must try if you're in Mandvi.",
  },

  {
    id: 2,
    name: "Varsha Mehta",
    rating: 5,
    text: "Different varieties at reasonable prices, with a hygienic and clean place. The cleanliness is truly appreciable.",
  },

  {
    id: 3,
    name: "Bhavesh Rajgor",
    rating: 5,
    text: "A wonderful place for authentic sweets and namkeens. The traditional taste and quality make Shreeji Namkeens a must-visit in Mandvi.",
  },
];

function Reviews() {
  return (
    <section
      className="reviews-section"
      id="reviews"
    >
      <ScrollReveal>

        <div className="reviews-container">

          {/* =========================
              HEADING
          ========================= */}

          <div className="reviews-heading">

            <div className="section-label">
              CUSTOMER VOICES
            </div>

            <h2 className="section-title">
              What People
              <span>Say About Us</span>
            </h2>

            <p className="section-description">
              A business grows through the trust,
              love, and support of its customers.
            </p>

          </div>


          {/* =========================
              REVIEWS
          ========================= */}

          <div className="reviews-grid">

            {reviews.map((review) => (

              <article
                className="review-card"
                key={review.id}
              >

                {/* Stars */}

                <div className="review-stars">
                  {"★".repeat(review.rating)}
                </div>


                {/* Review Text */}

                <p className="review-text">
                  "{review.text}"
                </p>


                {/* Author */}

                <div className="review-author">

                  <div className="review-avatar">
                    {review.name.charAt(0)}
                  </div>

                  <div>

                    <h4>
                      {review.name}
                    </h4>

                    <span>
                      Customer
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>


          {/* =========================
              FAMILY STORY / FACEBOOK VIDEO
          ========================= */}

          <div className="facebook-review-box">

            <div className="facebook-story-content">

              <span className="facebook-label">
                OUR LEGACY
              </span>

              <h3>
                The Story Behind
                <span> Shreeji Namkeens</span>
              </h3>

              <p>
                Discover the journey, memories, and traditions
                behind Shreeji Namkeens through our family story.
              </p>

            </div>


            {/* Facebook Video Button */}

            <a
              href="https://www.facebook.com/share/1H14Z1Ud7C/"
              target="_blank"
              rel="noopener noreferrer"
              className="facebook-button"
            >

              <span className="facebook-icon">
                f
              </span>

              <span>
                Watch Our Story
              </span>

            </a>

          </div>

        </div>

      </ScrollReveal>
    </section>
  );
}

export default Reviews;