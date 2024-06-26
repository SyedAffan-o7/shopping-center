import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function TableData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = "https://dummyjson.com/products";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row" style={{ padding: "50px" }}>
      {data.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card" style={{ height: "500px" }}>
            <div
              style={{
                height: "500px",
                width: "100%",
                background: `url(${product.thumbnail}) no-repeat center / cover`,
              }}
            ></div>
            <div className="card-body">
              <Link to={`/productdetail/${product.id}`}>
                <h5 className="card-title">{product.title} </h5>
              </Link>

              <p className="card-text">
                <i>{product.category}</i>
              </p>
              <p
                className="card-text"
                style={{ height: "50px", overflow: "auto" }}
              >
                {product.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
