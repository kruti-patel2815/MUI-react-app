import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Badge from "@mui/material/Badge";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PeopleIcon from "@mui/icons-material/People";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../img/logo.png";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import h1 from "../img/hist-image-2-768x672.webp";
import h2 from "../img/hist-image-1-768x346.webp";
import h3 from "../img/hist-image-3-300x300.webp";
import h4 from "../img/hist-image-4-300x300.webp";
import test1 from "../img/testimonial-1.webp";
import test2 from "../img/testimonial-2.webp";
import test3 from "../img/testimonial-3.webp";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Slider from "react-slick";
import Footer from "./Footer";
import ad6 from "../img/brand-logo-1.webp";
import ad7 from "../img/brand-logo-2.webp";
import ad8 from "../img/brand-logo-3.webp";
import ad9 from "../img/brand-logo-4.webp";
import ad10 from "../img/brand-logo-5.webp";
import ad11 from "../img/brand-logo-6.webp";
import ad12 from "../img/history-logo-1.webp";
import shop1 from "../img/insta-img-2.jpg";
import shop2 from "../img/insta-img-3.jpg";
import shop3 from "../img/insta-img-4.jpg";
import shop4 from "../img/insta-img-5-300x300.jpg";
import shop5 from "../img/insta-img-6-300x300.jpg";


const drawerWidth = 240;
const navItems = ["Home", "About", "Shop", "Blog", "Gallery", "Pages"];
const Pages = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LILAC
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const test = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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

  return (
    <div>
      {/* header section start */}
      <Box className="header-about">
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <CssBaseline />

          <AppBar
            component="nav"
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              position: "absolute",
              zIndex: 2,
              width: "100%",
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
              >
                <img src={logo} alt="" width="100px" />
              </Typography>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "block" }, color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <Badge badgeContent={1} color="primary" sx={{ mr: 2 }}>
                <a href="">
                  <PeopleIcon color="action" />
                </a>
              </Badge>
              <Badge badgeContent={1} color="primary" sx={{ mr: 2 }}>
                <a href="">
                  <ShoppingBagIcon color="action" />
                </a>
              </Badge>
              <Badge badgeContent={1} color="primary" sx={{ mr: 2 }}>
                <a href="">
                  <FavoriteIcon color="action" />
                </a>
              </Badge>
            </Toolbar>
          </AppBar>

          <Box
            sx={{
              position: "absolute",
              top: "150px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 3,
              textAlign: "center",
              color: "#222",
            }}
          >
            <Typography variant="h3" component="h3">
              Our History
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: "14px" }}>
              <Link
                sx={{
                  color: "black",
                  ":hover": { color: "rgba(230, 185, 144, 1)" },
                }}
                href="#"
                underline="none"
              >
                {"HOME"}
              </Link>
              / HISTORY
            </Typography>
          </Box>

          <nav>
            <Drawer
              anchor="right"
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block", sm: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </Box>
      {/* header section end */}

      {/* main section start */}
      <Box className="history">
        <Grid container spacing={2}>
          <Grid size={6}>
            <Box className="h-left">
              <h4>WORLD BEAUTY DESTINATION</h4>
              <h1>Our Beauty Store Is Founded In 1945</h1>
              <p>
                Risus feugiat in ante metus dictum. Nibh sit amet commodo nulla
                facilisi nullam vehicula ipsum. Posuere urna nec tincidunt
                praesent.
              </p>
              <br />
              <img src={h1}></img>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box className="h-right">
              <img src={h2}></img>
              <Box className="right-img">
                <Grid container spacing={2}>
                  <Grid size={6}>
                    <img src={h3}></img>
                  </Grid>
                  <Grid size={6}>
                    <img src={h4}></img>
                  </Grid>
                </Grid>
              </Box>
              <p>
                Tortor dignissim convallis aenean et tortor at risus viverra
                adipiscing. Faucibus in ornare quam viverra orci sagittis.
                Ornare arcu odio ut sem. Adipiscing tristique risus nec feugiat.
              </p>
              <br />
              <p>
                Ornare arcu odio ut sem. Adipiscing tristique risus nec feugiat.
                Tortor dignissim convallis aenean et tortor at risus viverra
                adipiscing. Faucibus in ornare quam viverra orci sagittis.
              </p>
              <br />
              <div className="elementor-btn">
                <button>READ MORE</button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* main section end */}
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
    </div>
  );
};

export default Pages;
