
function Lshoe(props) {
  return (
    <div className="container-fluid bg-light" style={{ backgroundColor:'rgb(254,216,177)' }}>
    <div className="row px-xl-3" >
      <div className="m-auto " >
        <div className="product-item bg-light mb-4 my-5"  style={{ width:"13rem",margin:'auto',boxShadow:'10px 10px 20px grey' }}>
          <div className="product-img position-relative overflow-hidden d-flex">
          <img className="img-fluid" style={{ width: '100%', height: '200px' }} src={props.img} alt="" />

            <div className="product-action">
              {
                localStorage.getItem('users')?
                <>
              <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-shopping-cart"></i></a>
                </>:
                <>
              <a className="btn btn-outline-dark btn-square" href="#"><i className="fa-solid fa-user"></i></a>
                
                </>
              }
              <a className="btn btn-outline-dark btn-square" href="#"><i className="far fa-heart"></i></a>
              <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-sync-alt"></i></a>
              <a className="btn btn-outline-dark btn-square" href="#"><i className="fa fa-search"></i></a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href="#">
              {props.title}
            </a>
            <h6><b>Brand:</b>{props.brand}</h6>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>${props.discount}</h5>
              <h6 className="text-muted ml-2">
                <del>${props.price}</del>
              </h6>
              {
                localStorage.getItem('users')?
                <>
                  <button className="text-light ms-3 me-1 bg-warning p-2" style={{ border:'1px solid transparent',borderRadius:'5px',fontWeight:'800' }}>Details</button>
                </>:
               null
              }
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-warning mr-1"></small>
              <small className="fa fa-star text-warning mr-1"></small>
              <small className="fa fa-star text-warning mr-1"></small>
              <small className="fa fa-star text-warning mr-1"></small>
              <small className="fa fa-star text-warning mr-1"></small>
              <small>({props.id})</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Lshoe