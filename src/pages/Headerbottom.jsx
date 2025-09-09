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
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const drawerWidth = 240;

const Headerbottom = (props) => {
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
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/" style={{color:"black"}}>Home</Link>
          </li>
          <li>
            <Link to="/about"  style={{color:"black"}}>About</Link>
          </li>
          <li>
            <Link to="/shop"  style={{color:"black"}}>Shop</Link>
          </li>
          <li>
            <Link to="/blog"  style={{color:"black"}}>Blog</Link>
          </li>
          <li>
            <Link to="/gallery"  style={{color:"black"}}>Gallery</Link>
          </li>
          <li>
            <Link to="/pages"  style={{color:"black"}}>Pages</Link>
          </li>
        </ul>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Header AppBar */}
      <AppBar
        component="nav"
        sx={{ backgroundColor: "white", position: "static" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            <img src={logo} alt="logo" width="100px" />
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "black" }}
          >
            <MenuIcon />
          </IconButton>

          <Badge badgeContent={1} color="primary" sx={{ mr: 2 }}>
            <Link to="/profile">
              <PeopleIcon color="action" />
            </Link>
          </Badge>
          <Badge badgeContent={1} color="primary" sx={{ mr: 2 }}>
            <Link to="/cart">
              <ShoppingBagIcon color="action" />
            </Link>
          </Badge>
          <Badge badgeContent={1} color="primary" sx={{ mr: 2 }}>
            <Link to="/wishlist">
              <FavoriteIcon color="action" />
            </Link>
          </Badge>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
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
  );
};

export default Headerbottom;
