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

function Save() {
  return (
    <div>
         {/* <!-- Offer Start --> */}
    <div class="container-fluid pt-5 pb-3">
        <div class="row px-xl-5">
            <div class="col-md-6">
                <div class="product-offer mb-30" style={{ height:'300px' }}>
                    <img class="img-fluid" src="img/offer-1.jpg" alt=""/>
                    <div class="offer-text">
                        <h6 class="text-white text-uppercase">Save 20%</h6>
                        <h3 class="text-white mb-3">Special Offer</h3>
                        <a href="" class="btn btn-warning">Shop Now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="product-offer mb-30" style={{ height:'300px' }}>
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
    {/* <!-- Offer End --> */}
    <div class="container-fluid pt-5 pb-3">
        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-light pr-3">Recent Products</span></h2>
        </div>
    </div>
  )
}

export default Save