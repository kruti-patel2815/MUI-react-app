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
import blog1 from "../img/blog-5.webp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailIcon from "@mui/icons-material/Email";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import blog2 from "../img/shop-19.1-768x998.webp";
import blog3 from "../img/shop-18.1.jpg";
import blog4 from "../img/shop-8.1-768x998.webp";


const drawerWidth = 240;
const navItems = ["Home", "About", "Shop", "Blog", "Gallery", "Pages"];
const Blog = (props) => {
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

  return (
    <div>
      {/* header section start */}
      <Box className="header-blog">
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
              top: "200px",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 3,
              textAlign: "center",
              color: "#222",
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{ fontSize: "50px", fontWeight: "bold" }}
            >
              Budget-friendly beauty treatment in metro cities
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
                {"Home"}
              </Link>
              / Budget-friendly beauty treatment in metro cities
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
      <Box className="Blog-info">
        <img src={blog1} alt="ad1" />
        <h5 className="blog-date">Jun - 12 - 2023</h5>
        <hr></hr>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: "20px",
            pb: "50px",
          }}
        >
          <Box className="content-btn">
            <button className="btn">MATTE MAKEUP</button>
            <button className="btn" style={{ margin: "0px 0px 0px 10px" }}>
              NUDE MAKEUP
            </button>
          </Box>
          <Box className="blog-icon">
            <Link
              sx={{
                color: "black",
                ":hover": { color: "rgba(228, 162, 101, 1)" },
                padding: "10px",
              }}
              href="#"
              underline="none"
            >
              <FacebookOutlinedIcon></FacebookOutlinedIcon>
            </Link>

            <Link
              sx={{
                color: "black",
                ":hover": { color: "rgba(228, 162, 101, 1)" },
                padding: "10px",
              }}
              href="#"
              underline="none"
            >
              <TwitterIcon></TwitterIcon>
            </Link>

            <Link
              sx={{
                color: "black",
                ":hover": { color: "rgba(228, 162, 101, 1)" },
                padding: "10px",
              }}
              href="#"
              underline="none"
            >
              <GoogleIcon></GoogleIcon>
            </Link>
            <Link
              sx={{
                color: "black",
                ":hover": { color: "rgba(228, 162, 101, 1)" },
                padding: "10px",
              }}
              href="#"
              underline="none"
            >
              <PinterestIcon></PinterestIcon>
            </Link>

            <Link
              sx={{
                color: "black",
                ":hover": { color: "rgba(228, 162, 101, 1)" },
                padding: "10px",
              }}
              href="#"
              underline="none"
            >
              <EmailIcon></EmailIcon>
            </Link>
          </Box>
        </Box>
        <Box>
          <p>
            Fusce mi velit, efficitur vel ante vitae, commodo molestie nisl. In
            malesuada ligula eu mauris sodales, feugiat porttitor dui rutrum.
            Vestibulum ultrices venenatis suscipit. Nulla facilisi. Nullam
            dictum, enim aliquam scelerisque dapibus, lorem quam tempus mauris,
            eu fringilla urna erat at lacus. Suspendisse ornare dignissim quam
            non pulvinar. Lore ipsum dolor sit amet, consectetur adipiscing
            elit. Vivamus malesuada finibus velit, in sollicitudin diam accumsan
            in. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Nulla pulvinar, quam eget porta viverra, risus diam rutrum odio, a
            faucibus elit velit sit amet velit. Nam aliquet fermentum lorem,
            eget ultrices lacus venenatis vitae. Nullam dictum efficitur
            gravida. In non lobortis arcu, at luctus odio.
          </p>
          <p className="blog-topic">
            <strong>
              “Proin vitae rhoncus erat, ut molestie augue. Integer accumsan,
              diam vel gravida porttitor, nisi nulla faucibus est, sit amet
              semper purus libero eget ex. Praesent ultricies lorem at erat
              condimentum, porta blandit orci finibus.”{" "}
            </strong>
          </p>
        </Box>
        <Box
          className="blog-iconimg"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid container spacing={2}>
            <Grid size={4}>
              <img src={blog2} alt="ad1" />
            </Grid>
            <Grid size={4}>
              <img src={blog3} alt="ad1" />
            </Grid>
            <Grid size={4}>
              <img src={blog4} alt="ad1" />
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* main section end */}
    </div>
  );
};

export default Blog;
