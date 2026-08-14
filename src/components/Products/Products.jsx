import { useMemo, useState } from "react";
import products from "../../data/products";
import ProductCard from "./ProductCard";
import ScrollReveal
  from "../ScrollReveal/ScrollReveal";
import "./Products.css";

function Products() {

  const [activeCategory, setActiveCategory] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Sweets",
    "Namkeens",
    "Special Items",
  ];

  const filteredProducts = useMemo(() => {

    return products.filter((product) => {

      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const search =
        searchTerm.trim().toLowerCase();

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search) ||

        product.description
          .toLowerCase()
          .includes(search) ||

        product.category
          .toLowerCase()
          .includes(search);

      return matchesCategory && matchesSearch;
    });

  }, [activeCategory, searchTerm]);

  return (
    <section
      className="products-section"
      id="products"
    >
    <ScrollReveal>
      <div className="products-container">

        {/* Section Heading */}

        <div className="products-heading">

          <div className="section-label">
            OUR PRODUCTS
          </div>

          <h2 className="section-title">
            Sweets & Namkeens
            <span>Directory</span>
          </h2>

          <p className="section-description">
            Explore a selection of sweets and namkeens
            associated with the traditional taste of
            Shreeji Namkeens.
          </p>

        </div>

        {/* Search */}

        <div className="product-search">

          <div className="search-icon">
            ⌕
          </div>

          <input
            type="text"
            placeholder="Search sweets or namkeens..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

          {searchTerm && (
            <button
              className="clear-search"
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}

        </div>

        {/* Categories */}

        <div className="product-filters">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "filter-button active"
                  : "filter-button"
              }
              onClick={() =>
                setActiveCategory(category)
              }
            >
              {category}
            </button>

          ))}

        </div>

        {/* Product Count */}

        <div className="product-results-info">

          <span>
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "item"
              : "items"}
          </span>

          {(searchTerm ||
            activeCategory !== "All") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
            >
              Clear filters
            </button>
          )}

        </div>

        {/* Products */}

        {filteredProducts.length > 0 ? (

          <div className="products-grid">

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
              />

            ))}

          </div>

        ) : (

          <div className="no-products">

            <div className="no-products-icon">
              ✦
            </div>

            <h3>
              No products found
            </h3>

            <p>
              We couldn't find anything matching
              your search.
            </p>

            <button
              className="primary-btn"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All");
              }}
            >
              View All Products
            </button>

          </div>

        )}

      </div>
    </ScrollReveal>
    </section>
  );
}

export default Products;