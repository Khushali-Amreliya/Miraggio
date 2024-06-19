import React from 'react'
import Slider from "react-slick";
import products from '../fakedata/Products';
import ProductCard from '../Category/ProductCard';
import { Link } from 'react-router-dom';

function Mirragio() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* Carousel */}
      <section className='container-fluid m-0 p-0'>
        <Slider {...settings}>
          <div>
            <img alt='' src='assets/img/Fierce_-_Top_-_Banner_copy_2.webp' className='img-fluid'></img>
          </div>
          <div>
            <img src='assets/img/Homepage-Banner_New.webp' className='img-fluid' alt=''></img>
          </div>
          <div>
            <img src='assets/img/Ace-back-in-stock-Banner_Desktop.webp' className='img-fluid' alt=''></img>
          </div>
        </Slider>
      </section>

      {/* Map Method New Arrivals */}
      <section className='container-fluid px-5 py-3'>
        <div className='row'>
          <div className='col-lg-3 align-items-center d-flex'>
            <div>
              <h5 className='text_change fw-bold'>NEW ARRIVALS</h5>
              <p style={{ fontSize: "14px" }}>Trend core for summer 2024 : <strong>APRICORE</strong></p>
              <button className='arrival_btn'><Link to="/seller" style={{ textDecoration: "none" }} className='text-light'>SHOP NOW</Link></button>
            </div>
          </div>
          <div className='col-lg-9'>
            <div className='div_img'>
              {
                products.map((item) => (
                  <div className='col-lg-3 col-md-6 col-sm-12 col-12 my-2 pb-2' key={item.id}>
                    <ProductCard
                      Productsitem={item}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      {/* video section */}
      <section className='container-fluid mt-3 mb-5 px-5'>
        <h5 className='text_change fw-bold text-center py-2'>TAKE A CLOSER LOOK</h5>
        <div className='row'>
          <div className='div_img'>
            <video autoPlay loop controls muted style={{ width: "250px" }} className='item1 video'>
              <source src="https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_83567425-b8fb-481b-87de-d368a32f587c.mp4?v=1713870745" type="video/mp4" />
            </video>
            <video autoPlay loop controls muted style={{ width: "250px" }} className='item1 video'>
              <source src="https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_dc40dcb8-70a1-467b-b7d7-111bc0c0f96b.mp4?v=1713856510" type="video/mp4" />
            </video>
            <video autoPlay loop controls muted style={{ width: "250px" }} className='item1 video'>
              <source src="https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_123b9bf4-7d65-45fb-853e-d83d6f591955.mp4?v=1713867391" type="video/mp4" />
            </video>
            <video autoPlay loop controls muted style={{ width: "250px" }} className='item1 video'>
              <source src="https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_8da29aa3-7729-43c4-92e8-2aec57b3f206.mp4?v=1713867673" type="video/mp4" />
            </video>
            <video autoPlay loop controls muted style={{ width: "250px" }} className='item1 video'>
              <source src="https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_a3c940bf-fb8e-4a99-9a3d-2494fcba7e0f.mp4?v=1713868182" type="video/mp4" />
            </video>
            <video autoPlay loop controls muted style={{ width: "250px" }} className='item1 video'>
              <source src="https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_f79de0e5-e7d1-464a-8459-569a46318e67.mp4?v=1713856523" type="video/mp4" />
            </video>
            <video autoPlay loop controls muted style={{ width: "250px" }} className='item1 video'>
              <source src="https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_e244ef8b-fd0a-42a5-9a7a-657110bc1985.mp4?v=1713861223" type="video/mp4" />
            </video>
            <video autoPlay loop controls muted style={{ width: "250px" }} className='item1 video'>
              <source src="https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_4c68b6dc-1d6d-4b22-96bf-0d985c90d6e9.mp4?v=1713867446" type="video/mp4" />
            </video>
            <video autoPlay loop controls muted style={{ width: "250px" }} className='item1 video'>
              <source src="https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_2aabb50e-bd23-47d4-8dca-129a68b7f380.mp4?v=1713868159" type="video/mp4" />
            </video>
            <video autoPlay loop controls muted style={{ width: "250px" }} className='item1 video'>
              <source src="https://cdn.shopify.com/s/files/1/0092/3831/5068/files/whatmore_tn_c5c02374-ede4-49f7-b3be-a5456ba96b9c.mp4?v=1713870716" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* collection */}
      <section className='container'>
        <div className='py-3'>
          <div className='row'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pt-4'>
              <img alt='' src='assets/img/deme_collection.webp' className='img-fluid'></img>
              <h3 className='miraggio_collect_title'>Miraggio & Deme Collection</h3>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pt-4'>
              <img alt='' src='assets/img/cocktail_collection.webp' className='img-fluid'></img>
              <h3 className='miraggio_collect_title'>Cocktail Collection</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping */}
      <section className='container my-5'>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12 d-lg-block d-md-block d-sm-none d-none'>
            <img alt='' src='assets/img/shipping.webp' className='img-fluid'></img>
          </div>
          <div className='col-sm-12 col-12 d-sm-block d-lg-none d-md-none'>
            <img alt='' src='assets/img/shipping1.webp' className='img-fluid'></img>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className='container'>
        <div className='text-center'>
          <h5 className='text_change fw-bold'>CONNECT WITH US</h5>
          <p className='mirragio_p'>For all your Fashion Inspiration</p>
        </div>
        <div className='d-lg-block d-none'>
          <div className='row pt-3'>
            <div className='col'>
              <div className='container1'>
                <img alt='' src='assets/img/connect.jpg' className='img-fluid mb-4 image' />
                <div class="middle">
                  <p style={{ fontSize: "13px" }}>More than a bag, it’s a statement.
                    Get hold of Ace at www.miraggiolife.com
                    Express yourself with Fierce by...</p>
                  <p style={{ position: "absolute", bottom: "0" }}>May 4, 2024</p>
                </div>
              </div>
              <div className='container1'>
                <img alt='' src='assets/img/connect1.jpg' className='img-fluid mb-4 image' />
                <div class="middle">
                  <p style={{ fontSize: "13px" }}>She’s a boss by day, life of the party by night, and a fearless explorer on weekends.
                    One woman, many moods...</p>
                  <p style={{ position: "absolute", bottom: "0" }}>April 27, 2024</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='container1'>
                <img alt='' src='assets/img/connect2.jpg' className='img-fluid mb-4 image' />
                <div class="middle">
                  <p style={{ fontSize: "13px" }}>EP 05// In My Miraggio
                    A girl that needs to carry her whole house in a bag 🤝A bold red tote that fits it all....</p>
                  <p style={{ position: "absolute", bottom: "0" }}>May 11, 2024</p>
                </div>
              </div>
              <div className='container1'>
                <img alt='' src='assets/img/connect3.jpg' className='img-fluid mb-4 image' />
                <div class="middle">
                  <p style={{ fontSize: "13px" }}>A cherry (bag) on top to elevate your board-room looks🍒
                    Discover FIERCE at www.miraggiolife.com [Miraggio,...</p>
                  <p style={{ position: "absolute", bottom: "0" }}>May 1, 2024</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='container1'>
                <img alt='' src='assets/img/connect4.jpg' className='img-fluid' style={{ height: "564px" }} />
                <div class="middle">
                  <p style={{ fontSize: "13px" }}>More than a bag, it’s a statement.Get hold of Ace at www.miraggiolife.com
                    Express yourself with Fierce by Miraggio.[Miraggio, Trending bags, workwear bags, office bags, handbags, tote bags, red bag]</p>
                  <p style={{ position: "absolute", bottom: "0" }}>May 4, 2024</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='container1'>
                <img alt='' src='assets/img/connect5.jpg' className='img-fluid mb-4 image' />
                <div class="middle">
                  <p style={{ fontSize: "13px" }}>EP 04// In My Miraggio Content creator, interior design and more much!
                    The not so usual contents of...</p>
                  <p style={{ position: "absolute", bottom: "0" }}>May 10, 2024</p>
                </div>
              </div>
              <div className='container1'>
                <img alt='' src='assets/img/connect6.jpg' className='img-fluid mb-4 image' />
                <div class="middle">
                  <p style={{ fontSize: "13px" }}>Walk the walk with confidence ft. Ace Tote Bag❤️ Grab yours at www.miraggiolife.com[Miraggio,..</p>
                  <p style={{ position: "absolute", bottom: "0" }}>April 29, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className='container d-lg-none d-block'>
          <div className='row'>
            <div className='div_img'>
              <img alt='' src='assets/img/connect.jpg' className='item' />
              <img alt='' src='assets/img/connect1.jpg' className='item' />
              <img alt='' src='assets/img/connect2.jpg' className='item' />
              <img alt='' src='assets/img/connect3.jpg' className='item' />
              <img alt='' src='assets/img/connect4.jpg' className='item' />
              <img alt='' src='assets/img/connect5.jpg' className='item' />
              <img alt='' src='assets/img/connect6.jpg' className='item' />
            </div>
          </div>
        </section>
        <button className='mx-auto d-block btn follow_btn my-4 px-3 py-2' style={{ fontSize: "12px" }}>FOLLOW US</button>
      </section>

      {/* <section className='container'>
        <div className='text-center'>
          <p className='text_change fw-bold miraggio_collect_title m-0 p-0'>#MIRAGGIOMUSE</p>
          <p className='mirragio_p'>Get style inspiration by your favourite fashionistas</p>
          <p className='fw-bold'>Join Our Community</p>
        </div>
      </section> */}
    </>
  )
}

export default Mirragio