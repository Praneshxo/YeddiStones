import React from "react";
import '../styles/featuredProducts.css';

const products = [
  { name: "Premium Oversized Hoodie", price: "$79.99", img: "/images/hoodie.jpg" },
  { name: "Classic Full Sleeve", price: "$59.99", img: "/images/full-sleeve.jpg" },
];

const FeaturedProducts = () => {
  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="grid">
        {products.map((product, index) => (
          <div key={index} className="card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
