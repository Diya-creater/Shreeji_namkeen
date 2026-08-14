import { useEffect, useState } from "react";
import gallery from "../../data/gallery";
import ScrollReveal
  from "../ScrollReveal/ScrollReveal";
import "./Gallery.css";

function Gallery() {

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedImage, setSelectedImage] =
    useState(null);

  const categories = [
    "All",
    "Shop",
    "History",
    "Food",
    "Family",
    "Memories",
  ];

  const filteredGallery =
    activeCategory === "All"
      ? gallery
      : gallery.filter(
          (item) =>
            item.category === activeCategory
        );

  /*
   * Open image
   */

  const openImage = (image) => {
    setSelectedImage(image);
  };

  /*
   * Close image
   */

  const closeImage = () => {
    setSelectedImage(null);
  };

  /*
   * Previous image
   */

  const showPrevious = () => {

    if (!selectedImage) return;

    const currentIndex =
      filteredGallery.findIndex(
        (item) =>
          item.id === selectedImage.id
      );

    const previousIndex =
      currentIndex === 0
        ? filteredGallery.length - 1
        : currentIndex - 1;

    setSelectedImage(
      filteredGallery[previousIndex]
    );
  };

  /*
   * Next image
   */

  const showNext = () => {

    if (!selectedImage) return;

    const currentIndex =
      filteredGallery.findIndex(
        (item) =>
          item.id === selectedImage.id
      );

    const nextIndex =
      currentIndex ===
      filteredGallery.length - 1
        ? 0
        : currentIndex + 1;

    setSelectedImage(
      filteredGallery[nextIndex]
    );
  };

  /*
   * Keyboard navigation
   */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (!selectedImage) return;

      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };

  }, [selectedImage, filteredGallery]);

  /*
   * Change category
   */

  const changeCategory = (category) => {

    setActiveCategory(category);

    setSelectedImage(null);
  };

  return (
    <section
      className="gallery-section"
      id="gallery"
    >
    <ScrollReveal>
      <div className="gallery-container">

        {/* Heading */}

        <div className="gallery-heading">

          <div className="section-label">
            OUR MEMORIES
          </div>

          <h2 className="section-title">

            Moments From
            <span>Our Journey</span>

          </h2>

          <p className="section-description">

            Explore photographs that capture
            the shop, people, food and memories
            connected with Shreeji Namkeens.

          </p>

        </div>

        {/* Categories */}

        <div className="gallery-filters">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "gallery-filter active"
                  : "gallery-filter"
              }
              onClick={() =>
                changeCategory(category)
              }
            >
              {category}
            </button>

          ))}

        </div>

        {/* Gallery Grid */}

        <div className="gallery-grid">

          {filteredGallery.map((item) => (

            <article
              className="gallery-card"
              key={item.id}
              onClick={() =>
                openImage(item)
              }
            >

              <div className="gallery-image">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="gallery-overlay">

                  <div className="gallery-view-icon">
                    +
                  </div>

                  <span>
                    View Photo
                  </span>

                </div>

              </div>

              <div className="gallery-card-content">

                <span>
                  {item.category}
                </span>

                <h3>
                  {item.title}
                </h3>

              </div>

            </article>

          ))}

        </div>

      </div>

      {/* =========================
          LIGHTBOX
      ========================= */}

      {selectedImage && (

        <div
          className="lightbox"
          onClick={closeImage}
        >

          <button
            className="lightbox-close"
            onClick={closeImage}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            className="lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="lightbox-info">

              <span>
                {selectedImage.category}
              </span>

              <h3>
                {selectedImage.title}
              </h3>

              <p>
                {selectedImage.description}
              </p>

            </div>

          </div>

          <button
            className="lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>

        </div>
    
      )}
</ScrollReveal>
    </section>
  );
}

export default Gallery;