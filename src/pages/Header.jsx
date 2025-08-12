import React from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import s1 from "../img/Slider-01-1-scaled.webp";
import s2 from "../img/Slider-02-scaled.webp";
import s3 from "../img/Slider-03-scaled.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CompostOutlinedIcon from "@mui/icons-material/CompostOutlined";
import NoDrinksOutlinedIcon from "@mui/icons-material/NoDrinksOutlined";
import SpaOutlinedIcon from "@mui/icons-material/SpaOutlined";
import BlurOffOutlinedIcon from "@mui/icons-material/BlurOffOutlined";
import img from "../img/overla-banr-04.webp";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import BlurCircularOutlinedIcon from "@mui/icons-material/BlurCircularOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import img1 from "../img/Grid-3-768x768.webp";
import img2 from "../img/Grid-4.webp";
import img3 from "../img/bath-salts-lavender-royalty-free-600nw-2539188765.webp";
import img4 from "../img/Grid-2.webp";
import img5 from "../img/Grid-1.webp";
import p1 from "../img/shop-16.jpg";
import p11 from "../img/shop-16.1.jpg";
import p2 from "../img/shop-18.jpg";
import p22 from "../img/shop-18.1.jpg";
import p3 from "../img/shop-2.jpg";
import p33 from "../img/shop-2.1.jpg";
import p4 from "../img/shop-3.jpg";
import p44 from "../img/shop-3.1.jpg";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import ad1 from "../img/shop-2.jpg";
import ad2 from "../img/shop-2.1.jpg";
import ad3 from "../img/shop-19.webp";
import ad4 from "../img/shop-16.jpg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { Margin } from "@mui/icons-material";
import ad5 from "../img/payment-icons.webp";
import ad6 from "../img/brand-logo-1.webp";
import ad7 from "../img/brand-logo-2.webp";
import ad8 from "../img/brand-logo-3.webp";
import ad9 from "../img/brand-logo-4.webp";
import ad10 from "../img/brand-logo-5.webp";
import ad11 from "../img/brand-logo-6.webp";
import ad12 from "../img/history-logo-1.webp";
import test1 from "../img/testimonial-1.webp";
import test2 from "../img/testimonial-2.webp";
import test3 from "../img/testimonial-3.webp";
import shop1 from "../img/insta-img-2.jpg";
import shop2 from "../img/insta-img-3.jpg";
import shop3 from "../img/insta-img-4.jpg";
import shop4 from "../img/insta-img-5-300x300.jpg";
import shop5 from "../img/insta-img-6-300x300.jpg";
import Headerbottom from "./Headerbottom";
import Headertop from "./Headertop";
import Footer from "./Footer";

const Header = (props) => {
  const { window } = props;
 

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    swipe: false,
    draggable: false,
  };



  const imgStyle = (widthPercent) => ({
    width: { xs: "100%", md: `${widthPercent}%` },
    height: 250,
    objectFit: "cover",
    borderRadius: 2,
    transition: "transform 0.4s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  });

  const slick = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  const adicon = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  const test = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const products = [
    {
      main: p1,
      hover: p11,
      name: "Detangling Hair Spray",
      price: "$5.00 - $10.00",
    },
    {
      main: p2,
      hover: p22,
      name: "Anti‑Aging Face Cream",
      price: "$5.00 - $10.00",
    },
    {
      main: p3,
      hover: p33,
      name: "Moisturizing Curl Activator Cream",
      price: "$11.00",
    },
    {
      main: p4,
      hover: p44,
      name: "Face Moisturizer & Face Wash",
      price: "$11.05",
    },
  ];

  return (
    <>
      {/* header section start */}
      <Headertop></Headertop>
      <Headerbottom></Headerbottom>
      {/* header section end */}
      {/* <hero section start> */}
      <Box
        className="swipe-slider"
        sx={{
          width: "100%",
          overflow: "hidden",
          m: 0,
          p: 0,
        }}
      >
        <Slider {...settings}>
          <div className="slide1">
            <img
              src={s1}
              alt="slide1"
              style={{
                width: "100%",
                height: "600px",
                display: "block",
                objectFit: "cover",
              }}
            />
            <div className="text">
              <h5>LONG LASTING </h5>
              <h1>Weightless & Waterproof</h1>
              <span>
                Doaesent in nunc vel urna consequat mattis eget vel libero.
                Phasellus pellentesque Proin tempus tempor diam, non
                pellentesque quam ornare vel. Aenean laoree
              </span>
              <br></br>
              <button className="btn">SHOP NOW</button>
            </div>
          </div>
          <div>
            <img
              src={s2}
              alt="slide2"
              style={{
                width: "100%",
                height: "600px",
                display: "block",
                objectFit: "cover",
              }}
            />
            <div className="text1">
              <h5>COSMETICS </h5>
              <h1>Dermatologist Tested</h1>
              <span>
                Aenean laoree praesent in nunc vel urna consequat mattis eget
                vel libero. Phasellus pellentesque Proin tempus tempor diam, non
                pellentesque quam ornare vel.{" "}
              </span>
              <br></br>
              <button className="btn">SHOP NOW</button>
            </div>
          </div>
          <div>
            <img
              src={s3}
              alt="slide3"
              style={{
                width: "100%",
                height: "600px",
                display: "block",
                objectFit: "cover",
              }}
            />
            <div className="text">
              <h5>PARABEN-FREE </h5>
              <h1>Triple Power Products</h1>
              <span>
                Praesent in nunc vel urna consequat mattis eget vel libero.
                Phasellus pellentesque Proin tempus tempor diam, non
                pellentesque quam ornare vel. Aenean laoree
              </span>
              <br></br>
              <button className="btn">SHOP NOW</button>
            </div>
          </div>
        </Slider>
      </Box>

      <Box className="shipping">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={4} className="icons">
              <Box className="i1">
                <LocalShippingOutlinedIcon
                  sx={{ fontSize: 70 }}
                ></LocalShippingOutlinedIcon>
              </Box>
              <Box className="t1">
                <h5>SHIPPING</h5>
                <h3>
                  Free Shipping
                  <br></br> World wide
                </h3>
              </Box>
            </Grid>
            <Grid size={4} className="icons">
              <Box className="i1">
                <SupportAgentOutlinedIcon
                  sx={{ fontSize: 70 }}
                ></SupportAgentOutlinedIcon>
              </Box>
              <Box className="t1">
                <h5>HASSLE FREE</h5>
                <h3>
                  {" "}
                  24*7 Customer
                  <br></br>Support
                </h3>
              </Box>
            </Grid>
            <Grid size={4} className="icons">
              <Box className="i1">
                <Inventory2OutlinedIcon
                  sx={{ fontSize: 70 }}
                ></Inventory2OutlinedIcon>
              </Box>
              <Box className="t1">
                <h5>SECURED</h5>
                <h3>Safe Packaging</h3>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* hero section end */}

      {/* information section start */}

      <Box className="info">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={3}>
              <div className="content-item">
                <div className="content-icon">
                  <CompostOutlinedIcon
                    sx={{ fontSize: 70 }}
                  ></CompostOutlinedIcon>
                </div>
                <div className="content-title">
                  <h5>
                    <a href="#" target="_blank" rel="nofollow">
                      Natural Ingredients
                    </a>
                  </h5>
                </div>
                <div className="content-description">
                  <p>
                    Praesent in nunc vel urna consequat mattis eget vel libero.
                    Phasellus entesque
                  </p>
                </div>
                <div className="content-btn">
                  <a href="">READ MORE</a>
                </div>
              </div>
            </Grid>
            <Grid size={3}>
              <div className="content-item">
                <div className="content-icon">
                  <BlurOffOutlinedIcon
                    sx={{ fontSize: 70 }}
                  ></BlurOffOutlinedIcon>
                </div>
                <div className="content-title">
                  <h5>
                    <a href="#" target="_blank" rel="nofollow">
                      Fragrance Free
                    </a>
                  </h5>
                </div>
                <div className="content-description">
                  <p>
                    Ahasellus entesque praesent in nunc vel urna consequat
                    mattis eget vel libero.{" "}
                  </p>
                </div>
                <div className="content-btn">
                  <a href="">READ MORE</a>
                </div>
              </div>
            </Grid>
            <Grid size={3}>
              <div className="content-item">
                <div className="content-icon">
                  <SpaOutlinedIcon sx={{ fontSize: 70 }}></SpaOutlinedIcon>
                </div>
                <div className="content-title">
                  <h5>
                    <a href="#" target="_blank" rel="nofollow">
                      Allergy Tested
                    </a>
                  </h5>
                </div>
                <div className="content-description">
                  <p>
                    Nunc vel urna consequat praesent in mattis eget vel libero
                    zhasellus entesque.
                  </p>
                </div>
                <div className="content-btn">
                  <a href="">READ MORE</a>
                </div>
              </div>
            </Grid>
            <Grid size={3}>
              <div className="content-item">
                <div className="content-icon">
                  <NoDrinksOutlinedIcon
                    sx={{ fontSize: 70 }}
                  ></NoDrinksOutlinedIcon>
                </div>
                <div className="content-title">
                  <h5>
                    <a href="#" target="_blank" rel="nofollow">
                      Paraben Free
                    </a>
                  </h5>
                </div>
                <div className="content-description">
                  <p>
                    Mattis eget vel libero praesent in nunc vel urna consequat
                    ehasellus entesque libero zhasellus.
                  </p>
                </div>
                <div className="content-btn">
                  <a href="">READ MORE</a>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* {/*information section end */}

      {/* elementor section start */}
      <Box className="elementor">
        <Grid container spacing={2}>
          <Grid size={6}>
            <img src={img} alt="" width={"85%"} />
          </Grid>
          <Grid size={6}>
            <div className="elementor-container">
              <div className="elementor-subtitle">
                <span>PURE AND SIMPLE</span>
              </div>
              <div className="elementor-title">
                <h1>Deeply Nourishing Hair Serum For Glowing & Healthy Hair</h1>
              </div>
              <div className="elementor-wrapper">
                Ut tempor sem leo, a ultricies quam aliquam eget. Vivamus
                commodo scelerisq ue velit, quis viverra velit bibendum vel.
                Phasell sus id leo et vestibulum.
              </div>
            </div>

            <Box className="elementor-section">
              <div className="container-bottom">
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <div className="elementor-wrap">
                      <div className="elementor-box">
                        <div className="elementor-icon">
                          <EnergySavingsLeafOutlinedIcon
                            sx={{ fontSize: 40 }}
                          ></EnergySavingsLeafOutlinedIcon>
                        </div>
                        <h4>Strong & Smooth</h4>
                      </div>
                      <div className="elementor-box">
                        <div className="elementor-icon">
                          <NoDrinksOutlinedIcon
                            sx={{ fontSize: 40 }}
                          ></NoDrinksOutlinedIcon>
                        </div>
                        <h4>Paraben-Free</h4>
                      </div>
                    </div>
                  </Grid>
                  <Grid size={6}>
                    <div className="elementor-wrap">
                      <div className="elementor-box">
                        <div className="elementor-icon">
                          <BlurCircularOutlinedIcon
                            sx={{ fontSize: 40 }}
                          ></BlurCircularOutlinedIcon>
                        </div>
                        <h4>Sulfate-Free </h4>
                      </div>
                      <div className="elementor-box">
                        <div className="elementor-icon">
                          <AcUnitOutlinedIcon
                            sx={{ fontSize: 40 }}
                          ></AcUnitOutlinedIcon>
                        </div>
                        <h4>100% Vegan </h4>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </Box>

            <div className="elementor-bottom">
              <div className="elementor-btn">
                <button>SHOP LILAC</button>
              </div>
              <div className="elementor-info">
                <MapsUgcOutlinedIcon
                  sx={{ fontSize: 40 }}
                ></MapsUgcOutlinedIcon>
                <div>
                  <h5>Chat Us Anytime</h5>
                  <p>+00 123 456 789</p>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      {/* elementor section end */}

      {/* product section start */}
      <Box>
        <Box className="product-top ">
          <h5>TOP PICKS</h5>
          <h2>New & Trending Products</h2>
        </Box>
      </Box>

      <Box sx={{ px: "20px", pb: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box component="img" src={img1} alt="img1" sx={imgStyle(40)} />
            <Box component="img" src={img2} alt="img2" sx={imgStyle(55)} />

            <Box component="img" src={img4} alt="img4" sx={imgStyle(50)} />
            <Box component="img" src={img3} alt="img3" sx={imgStyle(45)} />
          </Box>

          <Box
            component="img"
            src={img5}
            alt="img5"
            sx={{
              width: { xs: "100%", md: "38%" },
              height: { xs: 300, md: 520 },
              objectFit: "cover",
              borderRadius: 2,
              transition: "transform 0.4s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>
      </Box>

      {/* product section end */}

      {/* offer slick start */}

      <div className="slide-container">
        <Slider {...slick}>
          <div>
            <h3>40% Off On Booking</h3>
          </div>
          <div>
            <h3>40% Off On Booking</h3>
          </div>
          <div>
            <h3>40% Off On Booking</h3>
          </div>
          <div>
            <h3>40% Off On Booking</h3>
          </div>
          <div>
            <h3>40% Off On Booking</h3>
          </div>
          <div>
            <h3>40% Off On Booking</h3>
          </div>
        </Slider>
      </div>

      {/* offer slick end */}

      {/* sale section start */}
      <Box className="product-whole">
        <Box className="product-top">
          <h5>HOT SALE</h5>
          <h2>Imported Products</h2>
        </Box>
        <Box className="gallery-container">
          {products.map((p, idx) => (
            <Box className="product-card" key={idx}>
              <Box className="product-img">
                <img src={p.main} alt="" className="main-img" />
                <img src={p.hover} alt="" className="hover-img" />
              </Box>
              <Box className="product-detail">
                <h5>
                  <a href="#">{p.name}</a>
                </h5>
                <Box
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    color: "yellow",
                  }}
                >
                  <Rating
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ color: "gold", opacity: 0.55 }} />
                    }
                  />
                </Box>
                <Box className="product-price">{p.price}</Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* sale section end */}

      {/* advertisement section start */}
      <Box className="ad">
        <Box className="ad-wrapper">
          <Box className="ad-left">
            <Box className="image-grid">
              <img src={ad1} alt="ad1" />
              <img src={ad2} alt="ad2" />
              <img src={ad3} alt="ad3" />
              <img src={ad4} alt="ad4" />
            </Box>
          </Box>
          <Box className="ad-right">
            <Box className="content">
              <Box className="content-title">
                <h2>Under-Eye Bags Removal Cream</h2>
              </Box>
              <Box className="content-price">
                <span>$6.00</span>
              </Box>
              <Box className="content-rating">
                <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
                  <Rating
                    name="text-feedback"
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon
                        style={{ color: "gold", opacity: 0.55 }}
                        fontSize="inherit"
                      />
                    }
                  />
                  <Box sx={{ ml: 2 }}></Box>
                </Box>
              </Box>
              <Box className="content-detail">
                <p>
                  Suspendisse potenti nullam ac tortor vitae. Amet risus nullam
                  eget felis. Integer enim neque volutpat ac tincidunt vitae
                  semper quis lectus. Nunc mi ipsum faucibus vitae aliquet nec
                  eget sit sit amet.
                </p>
              </Box>
              <Box className="content-btn">
                <button className="btn">ADD TO CART</button>
              </Box>
              <Box className="content-btn2" sx={{ display: "flex", gap: 2 }}>
                <button className="btn">ADD TO WISHLIST</button>
                <button className="btn">BUY NOW</button>
              </Box>
            </Box>
            <Box
              className="content-bottom"
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "nowrap",
                width: "100%",
              }}
            >
              <Box
                className="tag"
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "nowrap",
                  width: "100%",
                }}
              >
                <span>Tag: </span>
                <Box className="btn1">
                  <a href="">Dryness</a>
                </Box>
              </Box>
              <Box
                className="category"
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "nowrap",
                  width: "100%",
                }}
              >
                <span>Category: </span>
                <Box className="btn1">
                  <a href="">Cream</a>
                </Box>
              </Box>
            </Box>
            <Box className="content-box">
              <Box
                sx={{ display: "flex", alignItems: "baseline", margin: "auto" }}
              >
                <AddShoppingCartIcon
                  sx={{
                    color: "rgb(211, 173, 137)",
                    marginRight: "4px",
                    verticalAlign: "baseline",
                    fontSize: "20px",
                  }}
                />
                Order in the next
                <span
                  style={{
                    color: "rgb(211, 173, 137)",
                    marginLeft: "4px",
                    marginRight: "4px",
                  }}
                >
                  12 hours 33 minutes
                </span>
                to get it by
                <span
                  style={{ color: "rgb(211, 173, 137)", marginLeft: "4px" }}
                >
                  Jul 22, 2025
                </span>
              </Box>
              <Box>
                <RemoveRedEyeOutlinedIcon
                  sx={{ color: "rgb(211, 173, 137)", marginRight: "4px" }}
                />
                Real Time
                <span
                  style={{
                    color: "rgb(211, 173, 137)",
                    marginLeft: "4px",
                    marginRight: "4px",
                  }}
                >
                  245
                </span>
                Visitors Right Now
              </Box>
            </Box>
            <Box className="content-ad">
              <img src={ad5} alt="ad1" />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* advertisement section end */}

      {/* icon-ad section start */}
      <Box className="adicons">
        <div className="ad-container">
          <Slider {...adicon}>
            <div>
              <img src={ad6} alt="ad1" />
            </div>
            <div>
              <img src={ad7} alt="ad1" />
            </div>
            <div>
              <img src={ad8} alt="ad1" />
            </div>
            <div>
              <img src={ad9} alt="ad1" />
            </div>
            <div>
              <img src={ad10} alt="ad1" />
            </div>
            <div>
              <img src={ad11} alt="ad1" />
            </div>
            <div>
              <img src={ad12} alt="ad1" />
            </div>
          </Slider>
        </div>
      </Box>

      {/* icon-ad section end */}

      {/* testimonial section start */}
      <Box className="test">
        <Box className="test-top">
          <Box className="subtitle">
            <span>TESTIMONIAL</span>
          </Box>
          <Box className="title">
            <h2>What Our People Says</h2>
          </Box>
          <Box className="rate">
            <Rating
              name="text-feedback"
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon
                  style={{ color: "#B6713E", opacity: 0.55 }}
                  fontSize="inherit"
                />
              }
            />
          </Box>
        </Box>
        <Box className="test-bottom">
          <div className="test-container">
            <Slider {...test}>
              <div>
                <p className="test-content">
                  Nullam iaos mattis dolor rutrum nec libero vehicula, a
                  suscipit feliicitudin. Aenean sed rutrum purus. Nunc nec magna
                  laoreet, sodaleus bibens viverra vivamus edia.
                </p>
                <h5 className="test-id">
                  ROSIA{" "}
                  <span
                    style={{
                      color: "rgb(211, 173, 137)",
                      marginLeft: "4px",
                      marginRight: "4px",
                    }}
                  >
                    - ACTRESS
                  </span>
                </h5>
                <Box className="test-img">
                  <img src={test1} alt="" />
                </Box>
              </div>
              <div>
                <p className="test-content">
                  Aenean sed rutrum purus. Nunc nec magna laoreet, sodaleus
                  bibens viverra. Nullam iaos mattis dolor rutrum nec libero
                  vehicula, a suscipit feliicitudin vivamus odia.
                </p>
                <h5 className="test-id">
                  JESICA{" "}
                  <span
                    style={{
                      color: "rgb(211, 173, 137)",
                      marginLeft: "4px",
                      marginRight: "4px",
                    }}
                  >
                    - DESIGNER
                  </span>
                </h5>
                <Box className="test-img">
                  <img src={test2} alt="" />
                </Box>
              </div>
              <div>
                <p className="test-content">
                  Nunc nec magna laoreet, sodaleus bibens viverra. Aenean sed
                  rutrum purus. Nullam iaos mattis dolor rutrum nec libero
                  vehicula, a suscipit adia feliicitudin navamus.{" "}
                </p>
                <h5 className="test-id">
                  HAANA
                  <span
                    style={{
                      color: "rgb(211, 173, 137)",
                      marginLeft: "4px",
                      marginRight: "4px",
                    }}
                  >
                    - SINGER
                  </span>
                </h5>
                <Box className="test-img">
                  <img src={test3} alt="" />
                </Box>
              </div>
            </Slider>
          </div>
        </Box>
      </Box>

      {/* testimonial section end */}

      {/* shop section start */}

      <Box className="shop">
        <Box className="shop-top">
          <Box className="subtitle">
            <span>INSTA SHOP</span>
          </Box>
          <Box className="title">
            <h2>Tag Us on Instagram</h2>
          </Box>
          <Box className="para">
            <p>
              Praesent in nunc vel urna consequat mattis eget vel libero.
              Phasellus <br></br>pellentesque Proin tempus tempor diam.
            </p>
          </Box>
        </Box>
        <Box className="shop-bottom">
          <Grid container spacing={0}>
            {[shop1, shop2, shop3, shop4, shop5].map((shop, index) => (
              <Grid
                item
                key={index}
                xs={6}
                sm={4}
                md={2.4}
                style={{ flexBasis: "20%", maxWidth: "20%" }}
              >
                <img
                  src={shop}
                  alt={`shop${index + 1}`}
                  style={{ width: "100%" }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      {/* shop section end */}

      {/* footer section start */}
            <Footer></Footer>
      {/* footer section end */}
    </>
  );
};

export default Header;
