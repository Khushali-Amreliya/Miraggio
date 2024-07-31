import React from 'react'
import Slider from 'react-slick'

const Sliders = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings} className='w-75 mt-5 mx-auto d-block'>    
                <div>
                    <img src='assets/img/2_95998ece-56e3-4bf5-bc25-b1c0aa04cf82.webp' alt='' className='img-fluid' />
                </div>
                <div>
                    <img src='assets/img/4_05f72b4b-c305-4741-937a-8ed209d6f5d5.webp' alt='' className='img-fluid ' />
                </div>
                <div>
                    <img src='assets/img/1_042f8d1c-d003-4ebf-b3f5-2bc114067244.webp' alt='' className='img-fluid ' />
                </div>
                <div>
                    <img src='assets/img/3_d4ad8f42-cd97-475e-a2b6-c6903156f21c.webp' alt='' className='img-fluid ' />
                </div>
                <div>
                    <img src='assets/img/6_cc54029b-e38d-43b3-940f-c4285b2911b4.webp' alt='' className='img-fluid' />
                </div>
            </Slider>
        </div>
    )
}

export default Sliders