import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Otherproducts({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on category "smartphones"
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category]); // Include category as a dependency to fetch data when category changes

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "50px" }}>
        {" "}
        Similar Products
      </h1>

      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          overflowY: "hidden",
          flexWrap: "nowrap",
          maxHeight: "600px",
        }}
      >
        {products.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card" style={{ height: "500px" }}>
              <div
                style={{
                  height: "400px",
                  width: "100%",
                  background: `url(${product.thumbnail}) no-repeat center / cover`,
                  objectFit: "container",
                }}
              ></div>
              <div className="card-body">
                <Link to={`/productdetail/${product.id}`}>
                  <h5 className="card-title">{product.title} </h5>
                </Link>
                <p className="card-text">
                  <i>{product.description}</i>
                </p>
                <p
                  className="card-text"
                  style={{ height: "30px", overflow: "auto" }}
                >
                  <b>Price : {product.price}</b>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
