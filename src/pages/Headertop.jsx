import React from 'react'
import Slider from "react-slick";

const Headertop = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <h3>Free Shipping On Orders Above $300</h3>
                </div>
                <div>
                    <h3>Black Friday :10% Off Store wide</h3>
                </div>
                <div>
                    <h3>Use Code : Lilac20 On Checkout</h3>
                </div>
               
            </Slider>
        </div>
    )
}

export default Headertop
