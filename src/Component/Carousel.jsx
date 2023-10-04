import React from 'react'
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



function Carosel() {
  return (
    <div>
          {/* <!-- Carousel Start --> */}
    <div class="container-fluid mb-3" style={{ backgroundColor:'rgb(254,216,177)' }}>
        <div class="row px-xl-5">
            <div class="col-lg-8">
                <div id="header-carousel" class="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#header-carousel" data-slide-to="1"></li>
                        <li data-target="#header-carousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item position-relative active" style={{ height: '430px' }}>
                            <img class="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{objectFit: 'cover'}}/>
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{ maxWidth: '700px' }}>
                                    <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                                    <p class="mx-md-5 px-5 animate__animated animate__bounceIn">We offer the best sales in quality and quantity to serve your body</p>
                                    <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item position-relative" style={{ height: '430px' }}>
                            <img class="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{objectFit: 'cover'}}/>
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{ maxWidth: '700px' }}>
                                    <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                                    <p class="mx-md-5 px-5 animate__animated animate__bounceIn">We offer the best sales in quality and quantity to serve your body</p>
                                    <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item position-relative" style={{ height: '430px' }}>
                            <img class="position-absolute w-100 h-100" src="img/carousel-3.jpg" style={{objectFit: 'cover'}}/>
                            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div class="p-3" style={{ maxWidth: '700px' }}>
                                    <h1 class="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                                    <p class="mx-md-5 px-5 animate__animated animate__bounceIn">We offer the best sales in quality and quantity to serve your body</p>
                                    <a class="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="product-offer mb-30" style={{ height: '200px' }}>
                    <img class="img-fluid" src="img/offer-1.jpg" alt=""/>
                    <div class="offer-text">
                        <h6 class="text-white text-uppercase">Save 20%</h6>
                        <h3 class="text-white mb-3">Special Offer</h3>
                        <a href="" class="btn btn-warning">Shop Now</a>
                    </div>
                </div>
                <div class="product-offer mb-30" style={{ height: '200px' }}>
                    <img class="img-fluid" src="img/offer-2.jpg" alt=""/>
                    <div class="offer-text">
                        <h6 class="text-white text-uppercase">Save 20%</h6>
                        <h3 class="text-white mb-3">Special Offer</h3>
                        <a href="" class="btn btn-warning">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Carousel End --> */}
    {/* <!-- Featured Start --> */}
    <div class="container-fluid pt-5">
        <div class="row px-xl-5 pb-3">
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="d-flex align-items-center bg-light mb-4" style={{ padding: '30px'}}>
                    <h1 class="fa fa-check text-warning m-0 mr-3"></h1>
                    <h5 class="font-weight-semi-bold m-0">Quality Product</h5>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="d-flex align-items-center bg-light mb-4" style={{ padding: '30px'}}>
                    <h1 class="fa fa-shipping-fast text-warning m-0 mr-2"></h1>
                    <h5 class="font-weight-semi-bold m-0">Free Shipping</h5>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="d-flex align-items-center bg-light mb-4" style={{ padding: '30px'}}>
                    <h1 class="fas fa-exchange-alt text-warning m-0 mr-3"></h1>
                    <h5 class="font-weight-semi-bold m-0">14-Day Return</h5>
                </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-12 pb-1">
                <div class="d-flex align-items-center bg-light mb-4" style={{ padding: '30px'}}>
                    <h1 class="fa fa-phone-volume text-warning m-0 mr-3"></h1>
                    <h5 class="font-weight-semi-bold m-0">24/7 Support</h5>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Featured End --> */}
    {/* <!-- Categories Start --> */}
    <div class="container-fluid pt-5 ">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-light pr-3">Categories</span></h2>
        <div class="row px-xl-5 pb-3 m-auto text-center">
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img class="img-fluid" src="https://johnlewis.scene7.com/is/image/JohnLewis/mobiles-nav-card-apple2-200323" alt=""/>
                        </div>
                        <div class="flex-fill pl-3">
                            <h6 >Smart Phones</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img class="img-fluid h-100" src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/category-page-mod-xps-13-9320-sl-right-800x620.png?fmt=png-alpha&wid=800&hei=620" alt=""/>
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Laptops</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img class="img-fluid h-100" src="https://chatelaine.com/wp-content/uploads/2021/12/grocery-prices-canada-2021-2022.jpg" alt=""/>
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>groceries</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img class="img-fluid " src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80 " alt=""/>
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>furnitures</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden"style={{width: '100px', height: '100px'}}>
                            <img class="img-fluid h-100" src="https://4.imimg.com/data4/GC/PX/GLADMIN-14016003/old-kangan-500x500.jpg" alt=""/>
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Womens jewellery</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img class="img-fluid h-100" src="https://ampere.shop/cdn/shop/products/Dusk-Blackframewithdarktint_polarizedlenses_1100x.jpg?v=1683788487" alt=""/>
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Sunglasses</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img class="img-fluid h-100" src="https://www.telegraph.co.uk/content/dam/family/2022/11/01/TELEMMGLPICT000314735064_trans_NvBQzQNjv4Bq-LJS7LKjeK9Zr8QxHnNHGwpwjfeuChtHUoe9wtZBhk8.jpeg" alt=""/>
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Clothes</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img class="img-fluid h-100" src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/64/629476/1.jpg?7150" alt=""/>
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Shoes</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img class="img-fluid h-100" src="https://dxc.scene7.com/is/image/dxc/DXC_5in5_Automotive?$landscape_desktop$" alt=""/>
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Automotives</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img class="img-fluid h-100" src="https://media.designcafe.com/wp-content/uploads/2020/09/30173843/home-decor-ideas-for-living-room.jpg" alt=""/>
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Home decoration</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img class="img-fluid h-100" src="https://img.mensxp.com/media/content/2022/Apr/ns_624c2d508c2d7.jpeg" alt=""/>
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Fragrances</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
                <a class="text-decoration-none" href="">
                    <div class="cat-item img-zoom d-flex align-items-center mb-4">
                        <div class="overflow-hidden" style={{width: '100px', height: '100px'}}>
                            <img class="img-fluid h-100" src="https://media.gq.com/photos/64933f4d86fb14a13de76bc3/4:3/w_1500,h_1125,c_limit/rolex-watches-art.jpg" alt=""/>
                        </div>
                        <div class="flex-fill pl-3">
                            <h6>Watches</h6>
                            <small class="text-body">100 Products</small>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    {/* <!-- Categories End --> */}

    
    {/* <!-- Products Start --> */}
    <div class="container-fluid pt-5 pb-3">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-light pr-3">Featured Products</span></h2>
    </div>
    </div>
  )
}

export default Carosel