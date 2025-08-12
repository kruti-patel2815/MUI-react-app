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
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import p1 from "../img/shop-16.jpg";
import p11 from "../img/shop-16.1.jpg";
import p2 from "../img/shop-18.jpg";
import p22 from "../img/shop-18.1.jpg";
import p3 from "../img/shop-2.jpg";
import p33 from "../img/shop-2.1.jpg";
import p4 from "../img/shop-3.jpg";
import p44 from "../img/shop-3.1.jpg";
import p5 from "../img/shop-4.jpg";
import p55 from "../img/shop-4.2.jpg";
import p6 from "../img/shop-20.jpg";
import p66 from "../img/shop-20.1.jpg";
import p7 from "../img/shop-19.webp";
import p77 from "../img/shop-19.1-768x998.webp";
import p8 from "../img/shop-17.jpg";
import p88 from "../img/shop-17.1.jpg";
import Footer from "./Footer";


const drawerWidth = 240;
const navItems = ["Home", "About", "Shop", "Blog", "Gallery", "Pages"];
const Shop = (props) => {
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
    {
      main: p5,
      hover: p55,
      name: "Anti-Wrinkle Retinol Serum",
      price: "$5.00",
    },
    {
      main: p6,
      hover: p66,
      name: "Face & Body Moisturizing Lotion",
      price: "$5.00",
    },
    {
      main: p7,
      hover: p77,
      name: "Moisturizing Curl Activator Cream",
      price: "$5.00 - $11.00",
    },
    {
      main: p8,
      hover: p88,
      name: "Dryness Relief Bar Soap",
      price: "$5.00 - $10.00",
    },
  ];

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
              Shop
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
              / SHOP
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

      {/* footer section start */}
          <Footer></Footer>
      {/* footer section end */}
    </div>
  );
};

export default Shop;
