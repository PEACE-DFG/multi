import './includes/navbar.css'
import './includes/style.min.css'
import './includes/bootstrap.css'
import './includes/bootstrap.min.css'
import './includes/bootstrap-grid.css'
import './includes/bootstrap-grid.min.css'
import './includes/bootstrap-reboot.css'
import './includes/bootstrap-reboot.min.css'
import './includes/style.scss'
import './includes/animate.min.css'

function Footer() {
  return (
    <div>
        
    {/* <!-- Vendor Start --> */}
    {/* <div className="container-fluid  py-5" style={{ backgroundColor:'rgb(254,216,177)' }}>
        <div className="row ">
            <div className="col " >
                <div className="owl-carousel vendor-carousel "style={{ display:'flex',justifyContent:'space-evenly',flexWrap:'wrap' }}>
                    <div className="bg-light p-4">
                        <img src="img/vendor-3.jpg" alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-4.jpg" alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-5.jpg" alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-6.jpg" alt=""/>
                    </div>
                    <div className="bg-light p-4">
                        <img src="img/vendor-7.jpg" alt=""/>
                    </div>
                   
                </div>
            </div>
        </div>
    </div> */}
    {/* <!-- Vendor End --> */}


    {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <h5 className="text-warning text-uppercase mb-4">Get In Touch</h5>
                <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
                <p className="mb-2"><i className="fa fa-map-marker-alt text-warning mr-3"></i>Osun state University,School Road</p>
                <p className="mb-2"><i className="fa fa-envelope text-warning mr-3"></i>awofesobipeace@gmail.com</p>
                <p className="mb-0"><i className="fa fa-phone-alt text-warning mr-3"></i>+234 81164 05518</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="text-warning text-uppercase mb-4">Quick Shop</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2 text-warning"></i>Home</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2 text-warning"></i>Our Shop</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2 text-warning"></i>Shop Detail</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2 text-warning"></i>Shopping Cart</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2 text-warning"></i>Checkout</a>
                            <a className="text-secondary" href="#"><i className="fa fa-angle-right mr-2 text-warning"></i>Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-warning text-uppercase mb-4">My Account</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2 text-warning"></i>Home</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2 text-warning"></i>Our Shop</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2 text-warning"></i>Shop Detail</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2 text-warning"></i>Shopping Cart</a>
                            <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right mr-2 text-warning"></i>Checkout</a>
                            <a className="text-secondary" href="#"><i className="fa fa-angle-right mr-2 text-warning"></i>Contact Us</a>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="text-warning text-uppercase mb-4">Newsletter</h5>
                        <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                        <form action="">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Your Email Address"/>
                                <div className="input-group-append">
                                    <button className="btn btn-warning">Sign Up</button>
                                </div>
                            </div>
                        </form>
                        <h6 className="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
                        <div className="d-flex">
                            <a className="btn btn-warning btn-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-warning btn-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-warning btn-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-warning btn-square" href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row border-top mx-xl-5 py-4" style={{ borderColor:'rgba(256, 256, 256, .1) !important'  }}>
            <div className="col-md-6 px-xl-0">
                <p className="mb-md-0 text-center text-md-left text-secondary">
                    &copy; <a className="text-warning" href="#">Domain</a>. All Rights Reserved. Redesigned
                    by
                    <a className="text-warning" href="#">CODEMaster</a>
                </p>
            </div>
            <div className="col-md-6 px-xl-0 text-center text-md-right">
                <img className="img-fluid" src="img/payments.png" alt=""/>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}
    <a href="#" className="btn btn-warning back-to-top"><i className="fa fa-angle-double-up text-light"></i></a>

    </div>
  )
}

export default Footer