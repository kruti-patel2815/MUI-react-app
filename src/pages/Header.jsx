import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../img/logo.png'
import Badge from '@mui/material/Badge';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleIcon from '@mui/icons-material/People';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Slider from "react-slick";
import s1 from '../img/Slider-01-1-scaled.webp';
import s2 from '../img/Slider-02-scaled.webp';
import s3 from '../img/Slider-03-scaled.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CompostOutlinedIcon from '@mui/icons-material/CompostOutlined';
import NoDrinksOutlinedIcon from '@mui/icons-material/NoDrinksOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import BlurOffOutlinedIcon from '@mui/icons-material/BlurOffOutlined';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Shop', 'Blog', 'Gallery', 'Pages'];
const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

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
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LILAC
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;



  return (
    <>

      {/* header section start */}
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <AppBar component="nav" sx={{ backgroundColor: 'white', position: 'static' }}>
          <Toolbar>


            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
            >
              <img src={logo} alt="" width="100px" />
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'block' }, color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Badge badgeContent={1} color="primary" sx={{ mr: 2 }}>
              <a href=""><PeopleIcon color="action" /></a>
            </Badge>
            <Badge badgeContent={1} color="primary" sx={{ mr: 2 }}>
              <a href=""><ShoppingBagIcon color="action" /></a>
            </Badge>
            <Badge badgeContent={1} color="primary" sx={{ mr: 2 }}>
              <a href=""><FavoriteIcon color="action" /></a>
            </Badge>
          </Toolbar>
        </AppBar>


        <nav>
          <Drawer
            anchor="right"
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>

      </Box>
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
          <div className='slide1'>
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
            <div className='text'>
              <h5>LONG LASTING </h5>
              <h1>Weightless & Waterproof</h1>
              <span>Doaesent in nunc vel urna consequat mattis eget vel libero. Phasellus pellentesque Proin tempus tempor diam, non pellentesque quam ornare vel. Aenean laoree</span><br></br>
              <button className='btn'><a href="">Shop Now</a></button>
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
            <div className='text1'>
              <h5>COSMETICS </h5>
              <h1>Dermatologist Tested</h1>
              <span>Aenean laoree praesent in nunc vel urna consequat mattis eget vel libero. Phasellus pellentesque Proin tempus tempor diam, non pellentesque quam ornare vel. </span><br></br>
              <button className='btn'><a href="">Shop Now</a></button>
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
            <div className='text'>
              <h5>PARABEN-FREE </h5>
              <h1>Triple Power Products</h1>
              <span>Praesent in nunc vel urna consequat mattis eget vel libero. Phasellus pellentesque Proin tempus tempor diam, non pellentesque quam ornare vel. Aenean laoree</span><br></br>
              <button className='btn'><a href="">Shop Now</a></button>
            </div>
          </div>
        </Slider>
      </Box>

      <Box className='shipping'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={4} className='icons'>

              <Box className='i1'  >
                <LocalShippingOutlinedIcon sx={{ fontSize: 70 }} ></LocalShippingOutlinedIcon>

              </Box>
              <Box className='t1'>
                <h5>SHIPPING</h5>
                <h3>Free Shipping
                  <br></br> World wide</h3>
              </Box>

            </Grid>
            <Grid size={4} className='icons'>
              <Box className='i1' >
                <SupportAgentOutlinedIcon sx={{ fontSize: 70 }}></SupportAgentOutlinedIcon>

              </Box>
              <Box className='t1'>
                <h5>HASSLE FREE</h5>
                <h3> 24*7 Customer
                  <br></br>Support</h3>
              </Box>

            </Grid>
            <Grid size={4} className='icons'>
              <Box className='i1'  >
                <Inventory2OutlinedIcon sx={{ fontSize: 70 }}></Inventory2OutlinedIcon>

              </Box>
              <Box className='t1'>
                <h5>SECURED</h5>
                <h3>Safe Packaging</h3>
              </Box>

            </Grid>

          </Grid>
        </Box>
      </Box>
      {/* hero section end */}

      {/* information section start */}

      <Box className='info'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={3}>
              <div className='content-item'>
                <div className='content-icon'>
                     <CompostOutlinedIcon sx={{ fontSize: 70 }}></CompostOutlinedIcon>
                </div>
                <div className='content-title'>
                      <h5><a href="#" target='_blank' rel='nofollow'>Natural Ingredients</a></h5>
                </div>
                <div className='content-description'>
                  <p>Praesent in nunc vel urna consequat mattis eget vel libero. Phasellus entesque</p>
                </div>
                <div className='content-btn'>
                  <button><a href="">READ MORE</a></button>
                </div>
              </div>
            </Grid>
            <Grid size={3}>
              <div className='content-item'>
                <div className='content-icon'>
                     <BlurOffOutlinedIcon sx={{ fontSize: 70 }}></BlurOffOutlinedIcon>
                </div>
                <div className='content-title'>
                      <h5><a href="#" target='_blank' rel='nofollow'>Fragrance Free</a></h5>
                </div>
                <div className='content-description'>
                  <p>Ahasellus entesque praesent in nunc vel urna consequat mattis eget vel libero. </p>
                </div>
                <div className='content-btn'>
                  <button><a href="">READ MORE</a></button>
                </div>
              </div>
            </Grid>
            <Grid size={3}>
             <div className='content-item'>
                <div className='content-icon'>
                     <SpaOutlinedIcon sx={{ fontSize: 70 }}></SpaOutlinedIcon>
                </div>
                <div className='content-title'>
                      <h5><a href="#" target='_blank' rel='nofollow'>Allergy Tested</a></h5>
                </div>
                <div className='content-description'>
                  <p>Nunc vel urna consequat praesent in mattis eget vel libero zhasellus entesque.</p>
                </div>
                <div className='content-btn'>
                  <button><a href="">READ MORE</a></button>
                </div>
              </div>
            </Grid>
            <Grid size={3}>
              <div className='content-item'>
                <div className='content-icon'>
                     <NoDrinksOutlinedIcon sx={{ fontSize: 70 }}></NoDrinksOutlinedIcon>
                </div>
                <div className='content-title'>
                      <h5><a href="#" target='_blank' rel='nofollow'>Paraben Free</a></h5>
                </div>
                <div className='content-description'>
                  <p>Mattis eget vel libero praesent in nunc vel urna consequat ehasellus entesque</p>
                </div>
                <div className='content-btn'>
                  <button><a href="">READ MORE</a></button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>


      {/* {/*information section end */}



    </>
  )
}

export default Header

