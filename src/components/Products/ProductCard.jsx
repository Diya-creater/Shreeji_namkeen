function ProductCard({ product }) {
  return (
    <article className="product-card">

      <div className="product-image-wrapper">

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        <span className="product-category">
          {product.category}
        </span>

      </div>

      <div className="product-content">

        <h3>
          {product.name}
        </h3>

        <p>
          {product.description}
        </p>

        <div className="product-footer">

          <span className="product-type">
            ✦ Shreeji Namkeens
          </span>

          <span className="product-arrow">
            →
          </span>

        </div>

      </div>

    </article>
  );
}

export default ProductCard;