import "../styles/product.css";

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-card">
        <img
          src="https://via.placeholder.com/300"
          alt="Product"
          className="product-image"
        />

        <div className="product-details">
          <h1 className="product-title">Sample Product</h1>
          <p className="product-description">
            This is a simple product description. It explains what the product
            is and why it is useful.
          </p>

          <p className="product-price">₹1,999</p>

          <button className="product-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
