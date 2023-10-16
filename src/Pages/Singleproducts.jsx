import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Component/Footer";

function Singleproducts() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [cart, setCart] = useState(() => {
    // Initialize the cart from local storage
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [showToast, setShowToast] = useState(false); // Add state for the toast

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

  const addToCart = () => {
    if (isProduct) {
      // Add the product to the cart state
      setCart([...cart, product]);

      // Store the updated cart in local storage
      localStorage.setItem("cart", JSON.stringify([...cart, product]));

      // Show the toast
      setShowToast(true);

      // Hide the toast after 2 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  };

  return (
    <div>
      <div className="container pt-5 pb-5">
        <h2 className=" text-uppercase mb-4">Product Details</h2>
        <div className="row align-items-center" style={{ overflow:'auto',height:'300px' }}>
          <div className="col-lg-6 align-items-center">
            {isProduct && (
              <img
                src={product.images[selectedImageIndex]}
                alt=""
                className="img-fluid rounded w-50 h-50"
              />
            )}
            <div className="d-flex justify-content-center mt-3 align-items-center flex-wrap">
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
                  <strong>Price:</strong> &#8358;{product.price}
                </p>
                <p className="mb-3">
                  <strong>Description:</strong> {product.description}
                </p>
                <p className="mb-3">
                  <strong>Rating:</strong> {product.rating}
                </p>
                <div>
                  {cart.includes(product) ? (
                   <>
                       {showToast && ( // Show the toast based on the state
                        <div className="toast-container position-fixed bottom-0 end-0 p-3 bg-success">
                          <div
                            id="liveToast"
                            className="toast show"
                            role="alert"
                            aria-live="assertive"
                            aria-atomic="true"
                          >
                            <div className="toast-header">
                              <strong className="me-auto ">Message</strong>
                              <small>1 seconds ago</small>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="toast-body">Product added to the cart</div>
                          </div>
                        </div>
                      )}
                   </>
                  ) : (
                    <>
                      <button
                        className="btn btn-warning text-light"
                        onClick={() => {
                          addToCart();
                        }}
                      >
                        Add to Cart
                      </button>
                    
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      {/* Bootstrap Toast */}
    </div>
  );
}

export default Singleproducts;
