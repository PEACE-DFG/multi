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
    <div className="container-fluid pt-5 pb-3">
        <div className="row px-xl-5">
            <div className="col-md-6">
                <div className="product-offer mb-30" style={{ height:'300px' }}>
                    <img className="img-fluid" src="img/offer-1.jpg" alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-warning">Shop Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="product-offer mb-30" style={{ height:'300px' }}>
                    <img className="img-fluid" src="img/offer-2.jpg" alt=""/>
                    <div className="offer-text">
                        <h6 className="text-white text-uppercase">Save 20%</h6>
                        <h3 className="text-white mb-3">Special Offer</h3>
                        <a href="" className="btn btn-warning">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Offer End --> */}
    <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-light pr-3">Recent Products</span></h2>
        </div>
    </div>
  )
}

export default Save