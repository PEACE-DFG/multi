import React, { useEffect, useState } from 'react';
import './includes/navbar.css';
import './includes/style.min.css';
import './includes/bootstrap.css';
import './includes/bootstrap.min.css';
import './includes/bootstrap-grid.css';
import './includes/bootstrap-grid.min.css';
import './includes/bootstrap-reboot.css';
import './includes/bootstrap-reboot.min.css';
import './includes/style.scss';
import './includes/animate.min.css';
import Footer from './Footer';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Retrieve items from local storage
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (Array.isArray(storedCart)) {
      setCartItems(storedCart);
    }
  }, []);

  useEffect(() => {
    // Calculate the total price when cartItems change
    const total = cartItems.reduce((acc, item) => {
      return acc + calculateTotalPrice(item);
    }, 0);
    setTotalPrice(total);
  }, [cartItems]);

  const calculateTotalPrice = (item) => {
    return (item.price || 0) * (item.quantity || 1);
  };

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart[index].quantity = 1;
    }
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  return (
    <div style={{backgroundColor:'rgb(211,211,211)' }}>
      {cartItems.length > 0 ? (
        <div className="container pt-3" >
          <section>
            <div className="row" style={{ overflow:'auto',height:'400px' }}>
              <div className="col-md-8 mb-3">
                <div className="card" style={{ boxShadow: '5px 5px 15px grey' }}>
                  <div className="card-header">
                    <h3>Cart ({cartItems.length})</h3>
                  </div>
                  <div className="card-body" style={{ maxHeight: '400px', overflow: 'auto' }}>
                    {cartItems.map((item, index) => (
                      <div key={index}>
                        <div className="row">
                          <div className="col-md-6">
                            <img
                              src={item.images[0]}
                              className="img-fluid w-50"
                              alt=""
                            />
                          </div>
                          <div className="col-md-6">
                            <h5>{item.title}</h5>
                            <h6>{item.description}</h6>
                            <p>Rating: {item.rating}</p>
                            <h4>Price: &#8358;{item.totalPrice || item.price}</h4>
                          </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="p-3">
                          <div>
                            <button
                              className="btn btn-warning"
                              onClick={() => removeItem(index)}
                            >
                              Remove
                            </button>
                          </div>
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-warning mx-2"
                              onClick={() => increaseQuantity(index)}
                            >
                              +
                            </button>
                            <p>{item.quantity || 1}</p>
                            <button
                              className="btn btn-warning mx-2"
                              onClick={() => decreaseQuantity(index)}
                            >
                              -
                            </button>
                          </div>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div class="card text-dark bg-light mb-3 p-3" style={{ maxWidth:'18rem', boxShadow: '5px 5px 15px grey' }}>
                  <div class="card-header"><b>CART SUMMARY</b></div>
                  <div class="card-body  " style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h6 class="card-title mt-1 ms-0">SUBTOTAL</h6>
                    <h5 class="card-text ms-4"> &#8358;{totalPrice.toFixed(2)}</h5>
                  </div>
                  <hr />
                  <button type="submit" className='btn btn-warning my-2 py-2 text-light' style={{ fontWeight: '900' }}>
                    CHECK OUT
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="container mt-3">
          {/* Your empty cart content */}
          <div className="container mt-3">
            <div style={{ maxWidth: '1000px', margin: 'auto', backgroundColor: 'rgb(211,211,211,0.5)', padding: '20px', borderRadius: '10px', textAlign: 'center', boxShadow: '10px 10px 20px grey' }}>
              <div>
                <img src="https://www.jumia.com.ng/assets_he/images/cart.668e6453.svg" alt="" />
              </div>
              <div className="my-4">
                <h4>Your Cart is Empty</h4>
              </div>
              <div>
                <h6>Browse Our Categories and discover our best deals</h6>
              </div>
              <div>
                <button className="btn btn-warning text-light mt-4 mb-3" style={{ fontWeight: '900' }}>START SHOPPING</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-dark ">
        {/* ... (your footer content) ... */}
        <Footer/>
      </div>
      {/* <!-- Footer End --> */}
    </div>
  );
}

export default Cart;
