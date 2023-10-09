import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Component/footer";

function Singleproducts() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  function singlePro() {
    axios.get(`https://dummyjson.com/products/${productId}`).then((res) => {
      setProduct(res.data);
    });
  }

  useEffect(() => {
    singlePro();
  }, []);

  let isProduct = Object.keys(product).length > 0 ? true : false;

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div>
      <div className="container-fluid pt-5 pb-5">
        <h2 className="section-title text-uppercase mb-4">Product Details</h2>
        <div className="row align-items-center">
          <div className="col-lg-6 align-items-center">
            {isProduct && (
              <img
                src={product.images[selectedImageIndex]}
                alt=""
                className="img-fluid rounded w-50"
              />
            )}
            <div className="d-flex justify-content-center align-items-center">
              {isProduct &&
                product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className={`img-thumbnail ${
                      selectedImageIndex === index ? "border-primary" : ""
                    }`}
                    style={{ width: "80px", cursor: "pointer" }}
                    onClick={() => handleImageClick(index)}
                  />
                ))}
            </div>
          </div>
          <div className="col-lg-6">
            {isProduct && (
              <div>
                <h3 className="mb-3">{product.title}</h3>
                <p className="mb-3">
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="mb-3">
                  <strong>Price:</strong> ${product.price}
                </p>
                <p className="mb-3">
                  <strong>Description:</strong> {product.description}
                </p>
                <p className="mb-3">
                  <strong>Rating:</strong> {product.rating}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Singleproducts;
