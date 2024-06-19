import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <section className='container-fluid footer_main'>
        <div>
          <hr></hr>
          <div className='row mx-5'>            
            <div className='col-xl-3 col-lg-3  d-lg-block d-none'>
              <p>MIRAGGIO</p>
              <li><Link>About Us</Link></li>
              <li><Link>Editorial</Link></li>
              <li><Link>Miraggio Muse</Link></li>
              <li><Link>Contact Us</Link></li>
            </div>
            <div className='col-lg-3 d-lg-block d-none'>
              <p>SHOP</p>
              <li><Link>Privacy Policy</Link></li>
              <li><Link>Terms Of Service</Link></li>
              <li><Link>Returns & Refunds</Link></li>
              <li><Link>FAQs</Link></li>
            </div>
            <div className='col-lg-3 d-lg-block d-none'>
              <p>CUSTOMER CARE</p>
              <li><Link>Orders</Link></li>
              <li><Link>Payment</Link></li>
              <li><Link>Delivery</Link></li>
              <li><Link>Promotions</Link></li>
              <li><Link>Track My Order</Link></li>
              <li><Link>Returns & Exchanges</Link></li>
            </div>
            <div className='col-lg-3 d-lg-block d-none'>
              <p>CONNECT</p>
              <div className="input-group mb-3 w-75">
                <input type="email" className="form-control border-bottom border-0 rounded-0 border-dark border-2" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <i className="ri-mail-line input-group-text bg-white border-bottom border-0 fs-5 rounded-0 border-dark border-2" id="basic-addon2"></i>
                </div>
              </div>
              <i className="ri-whatsapp-fill fs-4 px-2"></i>
              <i className="ri-instagram-line fs-4 px-2"></i>
              <i className="ri-facebook-circle-fill fs-4 px-2"></i>
              <i className="ri-youtube-fill fs-4 px-2"></i>
              <i className="ri-linkedin-fill fs-3 px-2"></i>
            </div>
          </div>
        </div>
                                          {/* accordion */}
        <div className='row'>
          <div className='col-md-12 col-12 d-lg-none d-block'>
            <div className="accordion accordion-flush" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <p>MIRAGGIO</p>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapsex" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <li><Link>About Us</Link></li>
                    <li><Link>Editorial</Link></li>
                    <li><Link>Miraggio Muse</Link></li>
                    <li><Link>Contact Us</Link></li>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <p>SHOP</p>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <li><Link>Privacy Policy</Link></li>
                    <li><Link>Terms Of Service</Link></li>
                    <li><Link>Returns & Refunds</Link></li>
                    <li><Link>FAQs</Link></li>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <p>CUSTOMER CARE</p>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <li><Link>Orders</Link></li>
                    <li><Link>Payment</Link></li>
                    <li><Link>Delivery</Link></li>
                    <li><Link>Promotions</Link></li>
                    <li><Link>Track My Order</Link></li>
                    <li><Link>Returns & Exchanges</Link></li>
                  </div>
                </div>
              </div>
              <div className='col-md-12 col-sm-12 col-12 d-lg-none d-block text-center mt-4'>
                <p>CONNECT</p>
                <div className="input-group mb-3 w-100">
                  <input type="email" className="form-control border-bottom border-0 rounded-0 border-dark border-2" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  <div className="input-group-append">
                    <i className="ri-mail-line input-group-text bg-white border-bottom border-0 fs-5 rounded-0 border-dark border-2" id="basic-addon2"></i>
                  </div>
                </div>
                <i className="ri-whatsapp-fill fs-2 px-2"></i>
                <i className="ri-instagram-line fs-2 px-2"></i>
                <i className="ri-facebook-circle-fill fs-2 px-2"></i>
                <i className="ri-youtube-fill fs-2 px-2"></i>
                <i className="ri-linkedin-fill fs-2 px-2"></i>
              </div>
            </div>
          </div>
        </div>
        <h6 className='m-0 p-0 footer_h6 pt-5'>© 2024 MIRAGGIO</h6>
        <h6 className='footer_h6 pt-1'>Developed by D2Cbox</h6>
      </section>
    </div>
  )
}

export default Footer