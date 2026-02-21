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
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const drawerWidth = 280;

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
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Header with close button */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px",
          borderBottom: "1px solid #eee",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#333" }}>
          LILAC
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "#666" }}>
          <MenuIcon />
        </IconButton>
      </Box>

      <Divider />

      {/* Menu Items */}
      <List sx={{ flex: 1, padding: 0 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            sx={{
              borderBottom: "1px solid #f5f5f5",
              "&:last-child": {
                borderBottom: "none",
              },
            }}
          >
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                padding: "18px 24px",
                "&:hover": {
                  backgroundColor: "#f9f9f9",
                },
              }}
            >
              <ListItemText
                primary={item.name}
                primaryTypographyProps={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#333",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Optional: Add footer with login button */}
      <Box sx={{ padding: "20px", borderTop: "1px solid #eee" }}>
        <Button
                className="btn"
                sx={{
                  position: "relative",
                  padding: {
                    xs: "10px 20px",
                    sm: "12px 24px",
                    md: "15px 30px",
                  },
                  color: "black",
                  backgroundColor: "#ecdec1",
                  border: "none",
                  cursor: "pointer",
                  overflow: "hidden",
                  transition: "color 0.4s ease",
                  zIndex: 1,
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  minWidth: { xs: "120px", sm: "140px", md: "160px" },
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
                Login
              </Button>
      </Box>
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
          py: { xs: 0.5, md: 1 },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: "56px", md: "64px" },
            px: { xs: 1.5, sm: 2, md: 3 }, // Increase padding slightly
          }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 0,
              flexShrink: 0,
              width: { xs: "70px", sm: "85px", md: "100px" }, // Slightly larger for tablet
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Typography>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" }, // Show only on large screens (not tablet)
              gap: 4,
              flex: 1,
              justifyContent: "center",
              mx: 2,
            }}
          >
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, sm: 1.5, md: 2 }, // Adjust gaps
            }}
          >
            {/* Icons - Show on SMALL (tablet) and larger screens, hide only on XS (mobile) */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" }, // Show on sm (600px+) screens
                alignItems: "center",
                gap: { sm: 1.5, md: 2 },
                mr: { sm: 1, md: 2 },
              }}
            >
              <Badge badgeContent={1} color="primary">
                <Link to="/profile">
                  <PeopleIcon sx={{ 
                    color: "black", 
                    fontSize: { sm: "22px", md: "24px" } 
                  }} />
                </Link>
              </Badge>
              <Badge badgeContent={1} color="primary">
                <Link to="/cart">
                  <ShoppingBagIcon sx={{ 
                    color: "black", 
                    fontSize: { sm: "22px", md: "24px" } 
                  }} />
                </Link>
              </Badge>
              <Badge badgeContent={1} color="primary">
                <Link to="/wishlist">
                  <FavoriteIcon sx={{ 
                    color: "black", 
                    fontSize: { sm: "22px", md: "24px" } 
                  }} />
                </Link>
              </Badge>
            </Box>

            {/* Login Button - Show on all screens */}
            <Button
              className="btn"
              sx={{
                position: "relative",
                padding: {
                  xs: "5px 8px",    // Mobile
                  sm: "6px 12px",   // Tablet
                  md: "8px 16px",   // Desktop
                },
                color: "black",
                backgroundColor: "#ecdec1",
                border: "none",
                cursor: "pointer",
                overflow: "hidden",
                transition: "color 0.4s ease",
                zIndex: 1,
                fontSize: {
                  xs: "11px",      // Mobile
                  sm: "12px",      // Tablet
                  md: "14px",      // Desktop
                },
                minWidth: {
                  xs: "55px",      // Mobile
                  sm: "65px",      // Tablet
                  md: "80px",      // Desktop
                },
                height: {
                  xs: "30px",      // Mobile
                  sm: "34px",      // Tablet
                  md: "40px",      // Desktop
                },
                marginRight: { xs: "4px", sm: "8px", md: "12px" }, // Space before menu icon
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

            {/* Mobile Menu Button - Show on mobile and tablet, hide on large screens */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { lg: "none" }, // Hide on large screens (≥1200px)
                color: "black",
                padding: { xs: "5px", sm: "6px" },
                marginLeft: "0px", // Remove left margin
              }}
            >
              <MenuIcon sx={{ 
                fontSize: { xs: "26px", sm: "28px" } 
              }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile & Tablet */}
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
            display: { lg: "none" }, // Hide drawer on large screens
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { xs: "85%", sm: drawerWidth }, // 85% on mobile, fixed on tablet
              maxWidth: "400px",
              boxShadow: "4px 0 20px rgba(0,0,0,0.1)",
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