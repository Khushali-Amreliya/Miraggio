import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import { cartUiAction } from '../Store/Slice/CartSliceUi';

function Header() {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const dispatch = useDispatch()
  const cartToggle = () => {
    dispatch(cartUiAction.toggle())
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <section className='container-fluid bg-dark text-light text-center'>
        <Slider {...settings}>
          <div>
            <h6 className='slick_title'>BEST D2C GAMECHANGER BRAND 2023</h6>
          </div>
          <div>
            <h6 className='slick_title'>FEMINA POWER BRANDS 2023</h6>
          </div>
        </Slider>
      </section>
      <section className='container my-2'>
        <div className='row'>
          <div className='col-md-2 col-sm-2 col-2 d-lg-none d-block'>
            <div className='float-start'>
              <button className="btn mt-2" type="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                {/* <i className="fa-solid fa-bars icon1 fs-3 d-lg-none d-block"></i> */}
                <i className="ri-menu-2-line fs-3 d-lg-none d-block fw-bold"></i>
              </button>
              <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                  <h5 id="offcanvasExampleLabel"></h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <div className='mb-4'>
                    <Link to=""><img alt='' src='assets/img/fierce_logo.svg' className='img-fluid w-25 mx-auto d-block'></img></Link>
                  </div>
                  <div>
                    <ul className='offcanvas_ul'>
                      <li>
                        <Link to="/seller" className='fw-bolder' data-bs-dismiss="offcanvas"><i className="fa-solid fa-angles-right pe-2"></i>BEST SELLER</Link>
                      </li>
                      <li>
                        <Link to="" className='fw-bolder'><i className="fa-solid fa-angles-right pe-2"></i>SHOP BY CATEGORY</Link>
                        <i className="ri-add-line float-end" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
                        <ul className="collapse" aria-labelledby="navbarDropdown" id="collapseExample">
                          <li><Link className="dropdown-item" to="/handbags" data-bs-dismiss="offcanvas">Handbags</Link></li>
                          <li><Link className="dropdown-item" to="/crossbody" data-bs-dismiss="offcanvas">Crossbody Bags</Link></li>
                          <li><Link className="dropdown-item" to="/shoulder" data-bs-dismiss="offcanvas">Shoulader Bags</Link></li>
                          <li><Link className="dropdown-item" to="/tote" data-bs-dismiss="offcanvas">Tote Bags</Link></li>
                          <li><Link className="dropdown-item" to="/mini" data-bs-dismiss="offcanvas">Mini Bags</Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/collection" className='fw-bolder' data-bs-dismiss="offcanvas"><i className="fa-solid fa-angles-right pe-2"></i>FEATURED &nbsp;COLLECTIONS</Link>
                        <i className="ri-add-line float-end" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
                        {/* <ul className="collapse" aria-labelledby="navbarDropdown" id="collapseExample1">
                        <li><Link className="dropdown-item" to="">Love Collections'24</Link></li>
                        <li><Link className="dropdown-item" to="">Miraggion & Deme</Link></li>
                        <li><Link className="dropdown-item" to="">Cocktail Collection</Link></li>
                        <li><Link className="dropdown-item" to="">Fall'23</Link></li>
                        <li><Link className="dropdown-item" to="">Capsuale Drop</Link></li>
                        <li><Link className="dropdown-item" to="">Commute</Link></li>
                      </ul> */}
                      </li>
                      <li>
                        <Link to="/cart" className='fw-bolder' data-bs-dismiss="offcanvas"><i className="fa-solid fa-angles-right pe-2"></i>CART</Link>
                        <i className="ri-add-line float-end" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample"></i>
                        {/* <ul className="collapse" aria-labelledby="navbarDropdown"  id="collapseExample2">
                        <li><Link className="dropdown-item" to="">Office Essentials</Link></li>
                        <li><Link className="dropdown-item" to="">Party Edit</Link></li>
                        <li><Link className="dropdown-item" to="">Gifts for Her</Link></li>
                        <li><Link className="dropdown-item" to="">Influncer's Pick</Link></li>
                      </ul> */}
                      </li>
                      {/* <li> */}
                      {/* <Link to="/editorial" className='fw-bolder'><i className="fa-solid fa-angles-right pe-2"></i>CONTACT</Link> */}
                      {/* <i className="ri-add-line float-end"  data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample"></i> */}
                      {/* <ul className="collapse" aria-labelledby="navbarDropdown" id="collapseExample3">
                        <li><Link className="dropdown-item" to="">Fashion</Link></li>
                        <li><Link className="dropdown-item" to="">Muses</Link></li>
                        <li><Link className="dropdown-item" to="">Collection</Link></li>
                        <li><Link className="dropdown-item" to="">Lifestyle</Link></li>
                      </ul> */}
                      {/* </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-xl-2 col-lg-2 col-md-8 col-sm-8 col-8' style={{ marginTop: "10px" }}>
            <Link to="/"><img alt='' src='assets/img/Miraggio_Logo.svg' className='img-fluid header_logo'></img></Link>
          </div>
          {/* <div className='col-lg-0 col-md-2 col-sm-3 col-2'></div> */}
          <div className='col-xl-8 col-lg-8 d-lg-block d-none'>
            <div className='justify-content-center d-flex'>
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      {/* <li  className="nav-item">
                      <Link to="" className="nav-link active dropdown_title"><img alt='' src='assets/img/fierce_logo.svg' className='img-fluid w-25'></img></Link>
                    </li> */}
                      <li className="nav-item">
                        <Link className="nav-link active dropdown_title" to="/seller">BEST SELLER</Link>
                      </li>
                      <li className="nav-item dropdown">
                        <Link className="nav-link active dropdown_title" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">SHOP BY CATEGORY</Link>
                        <ul className="dropdown-menu  dropdown-content" aria-labelledby="navbarDropdown">
                          <li><Link className="dropdown-item" to="/handbags">Handbags</Link></li>
                          <li><Link className="dropdown-item" to="/crossbody">Crossbody Bags</Link></li>
                          <li><Link className="dropdown-item" to="/shoulder">Shoulader Bags</Link></li>
                          <li><Link className="dropdown-item" to="/tote">Tote Bags</Link></li>
                          <li><Link className="dropdown-item" to="/mini">Mini Bags</Link></li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <Link className="nav-link active dropdown_title" to="/collection" id="navbarDropdown" role="button" aria-expanded="false">FEATURED COLLECTIONS</Link>
                        {/* <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="">Love Collections'24</Link></li>
                        <li><Link className="dropdown-item" to="">Miraggion & Deme</Link></li>
                        <li><Link className="dropdown-item" to="">Cocktail Collection</Link></li>
                        <li><Link className="dropdown-item" to="">Fall'23</Link></li>
                        <li><Link className="dropdown-item" to="">Capsuale Drop</Link></li>
                        <li><Link className="dropdown-item" to="">Commute</Link></li>
                      </ul> */}
                      </li>
                      <li className="nav-item dropdown">
                        <Link className="nav-link active dropdown_title" to="/cart" id="navbarDropdown" role="button" aria-expanded="false">CART</Link>
                        {/* <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="">Office Essentials</Link></li>
                        <li><Link className="dropdown-item" to="">Party Edit</Link></li>
                        <li><Link className="dropdown-item" to="">Gifts for Her</Link></li>
                        <li><Link className="dropdown-item" to="">Influncer's Pick</Link></li>
                      </ul> */}
                      </li>
                      {/* <li className="nav-item dropdown"> */}
                      {/* <Link className="nav-link active dropdown_title" to="/editorial" aria-expanded="false">CONTACT</Link> */}
                      {/* <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="">Fashion</Link></li>
                        <li><Link className="dropdown-item" to="">Muses</Link></li> 
                        <li><Link className="dropdown-item" to="">Collection</Link></li>
                        <li><Link className="dropdown-item" to="">Lifestyle</Link></li>
                      </ul> */}
                      {/* </li> */}
                      {/* <li className="nav-item">
                      <Link className="nav-link active text-danger fw-bold dropdown_title" to="/cart">CART</Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link active text-danger fw-bold dropdown_title" to="/login">Login</Link>
                    </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className='col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2 mt-2'>
            <div className='float-end'>
              <i className="ri-search-line header_icon"></i>
              <i className="ri-handbag-line header_icon position-relative" onClick={cartToggle}>
                <span className=" bagde bg-dark badge-icon">{totalQuantity}</span>
              </i>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Header