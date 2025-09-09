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
import v1 from "../img/LiLac-01.mp4";
import v2 from "../img/LiLac-02.mp4";
import v3 from "../img/LiLac-03.mp4";
import Footer from "./Footer";
import gallery1 from "../img/gallery-1-659x1024.jpg";
import gallery2 from "../img/gallery-2-1-659x1024.jpg";
import gallery3 from "../img/gallery-3-659x1024.jpg";
import gallery4 from "../img/gallery-4-1-659x1024.jpg";
import gallery5 from "../img/gallery-5-659x1024.jpg";
import Headerbottom from "./Headerbottom";
import Grid from "@mui/material/Grid";

const drawerWidth = 240;
const navItems = ["Home", "About", "Shop", "Blog", "Gallery", "Pages"];
const Gallery = (props) => {
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
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div>
      <Headerbottom></Headerbottom>
        {/* header section start */}
        <Box className="header-about">
          <Box sx={{ position: "relative", zIndex: 2 }}>
            <CssBaseline />

            {/* <AppBar
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
            </AppBar> */}

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
                Gallery
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
                / GALLERY
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

        <Box className="gallery">
          <p>ORGANIC IS THE WAY TO GO</p>
          <h1>Our Product Gallery</h1>
          <Box className="gallery-img">
            <Grid container spacing={2}>
              <Grid size={2.4}>
                <img src={gallery1} alt="ad1" />
              </Grid>
              <Grid size={2.4}>
                <img src={gallery2} alt="ad1" />
              </Grid>
              <Grid size={2.4}>
                <img src={gallery3} alt="ad1" />
              </Grid>
              <Grid size={2.4}>
                <img src={gallery4} alt="ad1" />
              </Grid>
              <Grid size={2.4}>
                <img src={gallery5} alt="ad1" />
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* main section end */}

        {/* set section start */}
        <Box className="set">
          <p>ORGANIC IS THE WAY TO GO</p>
          <h1>Best Nature & Organic Sets</h1>
          <span>
            Eget dolor morbi non arcu risus. Sagittis vitae et leo duis ut diam
            quam nulla porttitor. Fermentum posuere urna risus nec duis ut.
          </span>
          <Box className="set-video">
            <Grid container spacing={2}>
              <Grid size={4}>
                <video src={v1} autoPlay muted playsInline loop />
              </Grid>
              <Grid size={4}>
                <video src={v2} autoPlay muted playsInline loop />
              </Grid>
              <Grid size={4}>
                <video src={v3} autoPlay muted playsInline loop />
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* set section end */}
        {/* footer section start */}
        <Footer></Footer>
        {/* footer section end */}
      
    </div>
  );
};

export default Gallery;
