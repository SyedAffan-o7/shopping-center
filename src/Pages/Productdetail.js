import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Otherproducts from "./Otherproducts";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    let url = `https://dummyjson.com/products/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.thumbnail);
        setImages(data.images);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-5 my-5">
          <div className="row ">
            <div className="col-md-6 col-12">
              <img
                className="mb-5 mb-md-0 col-12"
                style={{ height: "400px", objectFit: "contain" }}
                src={selectedImage}
                alt=""
              />
              <ul className=" nav nav-tabs row">
                <li
                  className="col-3"
                  style={{ flex: "0 0 auto", columnCount: 1 }}
                >
                  <a
                    data-toggle="tab"
                    onClick={() => handleThumbnailClick(product.thumbnail)}
                  >
                    <img
                      src={product.thumbnail}
                      alt={`Thumbnail`}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </a>
                </li>
                {images.map((image, index) =>
                  index < 3 ? (
                    <li
                      className="col-3"
                      key={index}
                      style={{ flex: "0 0 auto", columnCount: 1 }}
                    >
                      <a
                        data-toggle="tab"
                        onClick={() => handleThumbnailClick(image)}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                      </a>
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
            <div className="col-md-6">
              <div className="small mb-1">
                Category : <i>{product.category}</i>
              </div>
              <h1 className="display-5 fw-bolder">{product.title}</h1>
              <div className="fs-5 mb-5">
                <span>${product.price}</span>
              </div>
              <p>
                <b>Description : </b>
                <br />
                {product.description}
              </p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="number" // Corrected from "num" to "number"
                  defaultValue={1}
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Otherproducts category={product.category} />
    </div>
  );
}
