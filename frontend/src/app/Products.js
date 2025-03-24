"use client"

import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios

const Products = () => {
  // Set up state to store the products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle errors

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    // Define an async function to fetch data using axios
    const fetchProducts = async () => {
      try {
        // Make a GET request to your API using axios
        const response = await axios.get("http://localhost:3001/api/products");

        // Check if the response was successful
        if (response.data.success) {
          setProducts(response.data.data); // Store the products in the state
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        setError(error.message); // Set error state if there's an error
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchProducts(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array ensures this only runs once when the component mounts

  // Display loading, error, or products
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      <div>
       <section className="products">
          {products.length > 0 ? (
          products.map((product) => (
            <div key={product.product_id} className="card" style={{ marginBottom: "20px" }}>
              
              <img
                src={product.image_url}
                alt={product.name}
                style={{ width: "16rem", height: "14rem" }}
              />
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))
         ) : (
          <p>No products found</p>
          )}
      </section>
      </div>
      
    </div>
  );
};

export default Products;
