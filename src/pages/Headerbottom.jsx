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
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const drawerWidth = 240;

const Headerbottom = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "Gallery", path: "/gallery" },
    { name: "Pages", path: "/pages" },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        LILAC
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link
              to={item.path}
              style={{
                color: "black",
                textDecoration: "none",
                width: "100%",
                padding: "12px 16px",
                display: "block",
              }}
            >
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Header AppBar */}
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "white",
          position: "static",
          boxShadow: "none",
          borderBottom: "1px solid #eee",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" component="div">
            <img src={logo} alt="logo" width="100px" />
          </Typography>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  "&:hover": {
                    color: "#1976d2",
                  },
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>

          {/* Icons Section */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Icons */}
            <Box sx={{ display: "flex", gap: 2, mr: 2 }}>
              <Badge badgeContent={1} color="primary">
                <Link to="/profile">
                  <PeopleIcon sx={{ color: "black" }} />
                </Link>
              </Badge>
              <Badge badgeContent={1} color="primary">
                <Link to="/cart">
                  <ShoppingBagIcon sx={{ color: "black" }} />
                </Link>
              </Badge>
              <Badge badgeContent={1} color="primary">
                <Link to="/wishlist">
                  <FavoriteIcon sx={{ color: "black" }} />
                </Link>
              </Badge>
              <Button
                className="btn"
                sx={{
                  position: "relative",
                  padding: {
                    xs: "0px 5px",
                    sm: "0px 6px",
                    md: "0px 8px",
                  },
                  color: "black",
                  backgroundColor: "#ecdec1",
                  border: "none",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "color 0.4s ease",
                  zIndex: 1,
                  fontSize: { xs: "12px", sm: "12px", md: "14px" },
                  minWidth: { xs: "60px", sm: "70px", md: "80px" },
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: 0,
                    backgroundColor: "black",
                    transition: "width 0.4s ease",
                    zIndex: -1,
                  },
                  "&:hover": {
                    color: "white",
                    "&::before": {
                      width: "100%",
                    },
                  },
                }}
              >
                LOGIN
              </Button>
            </Box>

            {/* Mobile Menu Button - Hidden on desktop */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: "none" },
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Headerbottom;