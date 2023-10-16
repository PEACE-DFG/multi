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
import Furnitures from '../Pages/Furnitures'
import Footer from './Footer'
function Furniture() {
  return (
    <div>
                                                   {/* <!-- Carousel Start --> */}
    <div className="container-fluid mb-3" style={{ backgroundColor:'rgb(254,216,177)' }}>
        <div className="row px-xl-5">
            <div className="col-lg-8">
                <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#header-carousel" data-slide-to="1"></li>
                        <li data-target="#header-carousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item position-relative active" style={{ height: '430px' }}>
                            <img className="position-absolute w-100 h-100" src="https://www.thecribfurniture.com.ng/wp-content/uploads/2023/02/472A4703-e1676627417850.jpg" style={{objectFit: 'cover'}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '700px' }}>
                                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Furnitures</h1>
                                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">We offer the best sales in quality and quantity to serve your body</p>
                                    <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative" style={{ height: '430px' }}>
                            <img className="position-absolute w-100 h-100" src="https://www.buyfromturkeynj.com/image/cache/catalog/Screenshot_1-942x624.jpg" style={{objectFit: 'cover'}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '700px' }}>
                                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Furnitures</h1>
                                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">We offer the best sales in quality and quantity to serve your body</p>
                                    <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative" style={{ height: '430px' }}>
                            <img className="position-absolute w-100 h-100" src="https://pictures-nigeria.jijistatic.com/115885410_NjIwLTc3OC03YTdkYjI0OTBlLTE.webp" style={{objectFit: 'cover'}}/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '700px' }}>
                                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Furnitures</h1>
                                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">We offer the best sales in quality and quantity to serve your body</p>
                                    <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="product-offer mb-30" style={{ height: '200px' }}>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-warning">Shop Now</a>
                    </div>
                </div>
                <div className="product-offer mb-30" style={{ height: '200px' }}>
                    <img className="img-fluid" src="https://ptsfurniture.com/wp-content/uploads/2020/04/pts-furniture-online-orders.jpg" alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-warning">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Carousel End --> */}
    {/* <!-- Featured Start --> */}
    <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px'}}>
                    <h1 className="fa fa-check text-warning m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px'}}>
                    <h1 className="fa fa-shipping-fast text-warning m-0 mr-2"></h1>
                    <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px'}}>
                    <h1 className="fas fa-exchange-alt text-warning m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div className="d-flex align-items-center bg-light mb-4" style={{ padding: '30px'}}>
                    <h1 className="fa fa-phone-volume text-warning m-0 mr-3"></h1>
                    <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Featured End --> */}
      {/* <!-- Products Start --> */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-light pr-3">Furnitures</span></h2>
    </div>
    {/* api fetching */}
    <Furnitures/>
    <Footer/>
    </div>
  )
}

export default Furniture