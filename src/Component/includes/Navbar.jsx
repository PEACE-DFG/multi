import './navbar.css'
import './style.min.css'
import './bootstrap.css'
import './bootstrap.min.css'
import './bootstrap-grid.css'
import './bootstrap-grid.min.css'
import './bootstrap-reboot.css'
import './bootstrap-reboot.min.css'
import './style.scss'
import { Link,useNavigate } from 'react-router-dom'
import './main.js'

function Navbar() {
    let navigate=useNavigate()
    function logOut(){
        localStorage.clear();
        navigate('/login')

    }
  return (
    <div>
          {/* <!-- Topbar Start --> */}
    <div className="container-fluid" style={{ backgroundColor:'rgb(254,216,177)' }}>
        <div className="row bg-light text-secondary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center h-100">
                    <a className="text-secondary mr-3 " href="">About</a>
                    <a className="text-secondary mr-3" href="">Contact</a>
                    <a className="text-secondary  mr-3" href="">Help</a>
                    <a className="text-secondary mr-3" href="">FAQs</a>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <div className="btn-group">
                         <button type="button" className="btn  btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">
                        My Account
                        </button>
                        <ul className="dropdown-menu">
                        {
                            localStorage.getItem('users')?
                            <>
                            <button className="dropdown-item" type="button"><Link to=''>Dashboard</Link></button>
                            <hr />
                         <button className="dropdown-item bg-danger mx-3 text-light" style={{ fontWeight:'900',width:'fit-content',borderRadius:'5px',boxShadow:'5px 5px 10px grey' }} type="button" onClick={logOut}>Log Out</button>
                            </>:
                            <>
                            <button className="dropdown-item" type="button"><Link to='/login'>Sign in</Link></button>
                            <button className="dropdown-item" type="button"><Link to='register'>Sign up</Link></button>
                            </>
                        }
                        </ul>           
                    </div>
                    <div className="btn-group mx-2">
                        {/* <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">EUR</button>
                            <button className="dropdown-item" type="button">GBP</button>
                            <button className="dropdown-item" type="button">CAD</button>
                        </div> */}
                        <button type="button" className="btn  btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">
                        USD
                        </button>
                        <ul className="dropdown-menu">
                        <button className="dropdown-item" type="button">EUR</button>
                            <button className="dropdown-item" type="button">GBP</button>
                            <button className="dropdown-item" type="button">CAD</button>
                        </ul>           

                    </div>
                    <div className="btn-group">
                        {/* <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">FR</button>
                            <button className="dropdown-item" type="button">AR</button>
                            <button className="dropdown-item" type="button">RU</button>
                        </div> */}
                         <button type="button" className="btn  btn-sm btn-light dropdown-toggle" data-bs-toggle="dropdown">
                        EN
                        </button>
                        <ul className="dropdown-menu">
                        <button className="dropdown-item" type="button">FR</button>
                            <button className="dropdown-item" type="button">AR</button>
                            <button className="dropdown-item" type="button">RU</button>
                        </ul>
                        
                    </div>
                </div>
                <div className="d-inline-flex align-items-center d-block d-lg-none">
                    <a href="" className="btn px-0 ml-2">
                        <i className="fas fa-heart text-dark"></i>
                        <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom:'2px' }}>0</span>
                    </a>
                    <a href="" className="btn px-0 ml-2">
                        <i className="fas fa-shopping-cart text-dark"></i>
                        <span className="badge text-dark border border-dark rounded-circle" style={{ paddingBottom:'2px' }}>0</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
            <div className="col-lg-4">
                <a href="" className="text-decoration-none">
                    <span className="h1 text-uppercase text-warning bg-dark px-2">Multi</span>
                    <span className="h1 text-uppercase text-dark bg-warning px-2 ml-n1">Shop</span>
                </a>
            </div>
            <div className="col-lg-4 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-warning">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-4 col-6 text-right">
                <p className="m-0">Customer Service</p>
                <h5 className="m-0">+234 811 6405 518</h5>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End --> */}


    {/* <!-- Navbar Start --> */}
    <div className="container-fluid bg-secondary mb-30">
        <div className="row px-xl-5">
            <div className="col-lg-3 d-none d-lg-block">
                <a className="btn d-flex align-items-center justify-content-between bg-warning w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: '65px', padding: '0 30px' }}>
                    <h6 className="text-dark m-0"><i className="fa fa-bars mr-2"></i>Categories</h6>
                    <i className="fa fa-angle-down text-dark"></i>
                </a>
                <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{ width:'calc(100% - 30px)', zIndex: '999' }}>
                    <div className="navbar-nav w-100">
                       
                            <a href="#" className="nav-link dropdown-toggle" ><Link to='shirt'>Dresses</Link> </a>
                          
                      
                        <a href="" className="nav-item nav-link">
                            <Link to='/phones'>Phones</Link>
                        </a>
                        <a href="" className="nav-item nav-link">
                            <Link to="/laptops">Laptops</Link>
                        </a>
                        <a href="" className="nav-item nav-link">
                            <Link to='/fragrances'>Fragrances</Link>
                        </a>
                        <a href="" className="nav-item nav-link">
                            <Link to='/skincares'>Skincare</Link>
                        </a>
                        <a href="" className="nav-item nav-link">
                            <Link to='/home-decorations'>Home decoration</Link>
                        </a>
                        <a href="" className="nav-item nav-link">
                            <Link to="/furnitures">Furniture</Link>
                        </a>
                        <a href="" className="nav-item nav-link">
                            <Link to="/watches">Watches & Jewelleries</Link>
                        </a>
                        <a href="" className="nav-item nav-link">
                            <Link to="/automotives">Automotives</Link>
                        </a>
                        <a href="" className="nav-item nav-link">
                            <Link to='/shoes'>Shoes</Link>
                        </a>
                    </div>
                </nav>
            </div>
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 px-0">
                    <a href="" className="text-decoration-none d-block d-lg-none">
                        <span className="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                        <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav mr-auto py-0">
                            <a href="" className="nav-item nav-link active"><Link to='/'>Home</Link></a>
                            <a href="" className="nav-item nav-link">Shop</a>
                            <a href="" className="nav-item nav-link">Shop Detail</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages <i className="fa fa-angle-down mt-1"></i></a>
                                <div className="dropdown-menu bg-warning text-light rounded-0 border-0 m-0">
                                    <a href="" className="dropdown-item">Shopping Cart</a>
                                    <a href="" className="dropdown-item">Checkout</a>
                                </div>
                            </div>
                            <a href="" className="nav-item nav-link">Contact</a>
                        </div>
                        <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                            <a href="" className="btn px-0">
                                <i className="fas fa-heart text-warning"></i>
                                <span className="badge text-warning border border-secondary rounded-circle" style={{ paddingBottom:'2px' }}>0</span>
                            </a>
                            <a href="" className="btn px-0 ml-3">
                                <i className="fas fa-shopping-cart text-warning"></i>
                                <span className="badge text-warning border border-secondary rounded-circle" style={{ paddingBottom:'2px' }}>0</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Navbar End --> */}
    </div>
  )
}

export default Navbar