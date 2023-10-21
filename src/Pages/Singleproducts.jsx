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
  const [isProductAdded, setIsProductAdded] = useState(false); // Check if the product is already in the cart

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

  const addToCart = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (isProduct) {
      // Check if the product is already in the cart
      if (!cart.some((item) => item.id === product.id)) {
        // Add the product to the cart state
        setCart([...cart, product]);

        // Store the updated cart in local storage
        localStorage.setItem("cart", JSON.stringify([...cart, product]));

        // Show the toast
        setShowToast(true);

        // Hide the toast after 2 seconds and then refresh the page
        setTimeout(() => {
          setShowToast(false);
          window.location.reload(); // Refresh the page
        }, 2000);
      } else {
        // Product is already in the cart, set a flag to display a message
        setIsProductAdded(true);
      }
    }
  };

  return (
    <div>
      <div className="container pt-5 pb-5">
        <h2 className=" text-uppercase mb-4">Product Details</h2>
        <div className="row align-items-center" style={{ overflow: "auto", height: "350px" }}>
          <div className="col-lg-6 align-items-center">
            {isProduct && (
              <img
                src={product.images[selectedImageIndex]}
                alt=""
                className="img-fluid rounded w-50 h-25"
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
                  {isProductAdded ? (
                    // Display a message if the product is already added
                    <p className="text-danger">Product has already been added to the cart.</p>
                  ) : showToast ? (
                    // Show the toast based on the state
                    <div className="toast-container position-fixed bottom-0 end-0 p-3">
                      <div
                        id="liveToast"
                        className="toast show"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <strong className="me-auto ">Alert</strong>
                          <small>1 second ago</small>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                            onClick={() => {
                              setShowToast(false);
                              window.location.reload(); // Refresh the page
                            }}
                          ></button>
                        </div>
                        <div className="toast-body">Product has been added to the cart</div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={addToCart}> {/* Add a form element */}
                      <button
                        className="btn btn-warning text-light"
                        type="submit" // Add type="submit" to the button
                      >
                        Add to Cart
                      </button>
                      </form>
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
