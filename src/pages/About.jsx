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
import about1 from "../img/about-1-768x614.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import about2 from "../img/about-2-693x1024.jpg";
import about3 from "../img/about-3-693x1024.jpg";
import about4 from "../img/about-5.jpg";
import about5 from "../img/about-6.jpg";
import about6 from "../img/about-7.jpg";
import Footer from "./Footer";
import Headerbottom from "./Headerbottom";


const drawerWidth = 240;
const navItems = ["Home", "About", "Shop", "Blog", "Gallery", "Pages"];
const About = (props) => {
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
      <Headerbottom> </Headerbottom>
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
            > */}
              {/* <Toolbar>
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
              </Toolbar> */}
            {/* </AppBar> */}

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
                About
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
                / ABOUT
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
        <Box className="main-about">
          <Grid container spacing={2}>
            <Grid size={6}>
              <Box className="main-left">
                <h5>EFFECTIVE FOR SKIN</h5>
                <h2>Guaranteed Result In 2 Weeks</h2>
                <p>
                  Quickly pursue granular synergy after just-in-time niche
                  markets. Phosfluorescently syndicate sticky content whereas
                  robust resources. Uniquely target integrated meta-services and
                  inexpensive process improvements. Distinctively matrix robust
                  ideas through customer-directed leadership skills. Efficiently
                  evolve.
                </p>
                <hr></hr>

                <Box sx={{ display: "flex", pt: "25px" }}>
                  <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                  <span>72 St. Merch Street, LA,California.</span>
                </Box>
                <Box sx={{ display: "flex", pt: "25px" }}>
                  <Box sx={{ display: "flex" }}>
                    <CallOutlinedIcon></CallOutlinedIcon>
                    <Link
                      sx={{
                        color: "black",
                        ":hover": { color: "rgba(243, 180, 121, 1)" },
                      }}
                      href="#"
                      underline="none"
                    >
                      {"+00 123 456789"}
                    </Link>
                  </Box>
                  <Box sx={{ display: "flex", pl: "50px" }}>
                    <EmailOutlinedIcon></EmailOutlinedIcon>
                    <Link
                      sx={{
                        color: "black",
                        ":hover": { color: "rgba(243, 180, 121, 1)" },
                      }}
                      href="#"
                      underline="none"
                    >
                      {"info@example.com"}
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box className="main-right">
                <img src={about1} alt="ad1" />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/*  */}
        <Box className="intense">
          <Grid container spacing={2}>
            <Grid size={7}>
              <Grid container spacing={2}>
                <Grid size={6}>
                  <img src={about2} alt="ad1" />
                </Grid>
                <Grid size={6}>
                  <img src={about3} alt="ad1" />
                </Grid>
              </Grid>
            </Grid>
            <Grid size={5}>
              <Box className="intense-right">
                <h5>INTENSE HYDRATION</h5>
                <h2>Restore Skin Moisture</h2>
                <p>
                  Tulla at volutpat diam ut venenatis tellus in. Tellus molestie
                  nunc non blandit massa enim nec dui nunc. Elementum eu
                  facilisis sed odio morbi quis commodo odio aenean. Ultrices mi
                  tempus imperdiet nulla malesuada.
                </p>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <h3>Opening Hours</h3>
                    <span>Mon - Fri : 08:30 - 20:00</span>
                    <p>Sat & Sun : 09:30 - 21:30</p>
                  </Box>
                  <Box sx={{ pl: "30px" }}>
                    <h3>Reach Us</h3>
                    <Link
                      sx={{
                        color: "black",
                        ":hover": { color: "rgba(243, 180, 121, 1)" },
                      }}
                      href="#"
                      underline="none"
                    >
                      {"info@example.com"}
                    </Link>
                    <br></br>
                    <p>
                      <Link
                        sx={{
                          color: "black",
                          ":hover": { color: "rgba(243, 180, 121, 1)" },
                        }}
                        href="#"
                        underline="none"
                      >
                        {"+00 123 456789"}
                      </Link>
                    </p>
                  </Box>
                </Box>
                <Box className="content-btn">
                  <button className="btn">READ MORE</button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* main section end */}
        {/* team section start */}
        <Box className="team">
          <h5>OUR TEAM</h5>
          <h1>Cosmetic Experts</h1>
          <Box className="team-img">
            <Grid container spacing={2}>
              <Grid size={4}>
                <img src={about4} alt="ad1" />
                <Link
                  sx={{
                    color: "black",
                    ":hover": { color: "rgba(243, 180, 121, 1)" },
                    fontWeight: "bold",
                  }}
                  href="#"
                  underline="none"
                >
                  {"Nicolas"}
                </Link>
                <br></br>
                <span>Project Manager</span>
              </Grid>
              <Grid size={4}>
                <img src={about5} alt="ad1" />
                <Link
                  sx={{
                    color: "black",
                    ":hover": { color: "rgba(243, 180, 121, 1)" },
                    fontWeight: "bold",
                  }}
                  href="#"
                  underline="none"
                >
                  {"Niyama"}
                </Link>
                <br></br>
                <span>CEO</span>
              </Grid>
              <Grid size={4}>
                <img src={about6} alt="ad1" />
                <Link
                  sx={{
                    color: "black",
                    ":hover": { color: "rgba(243, 180, 121, 1)" },
                    fontWeight: "bold",
                  }}
                  href="#"
                  underline="none"
                >
                  {"Mark"}
                </Link>
                <br></br>
                <span>Founder</span>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* team section end */}

        {/* essential section start */}
        <Box className="essential">
          <Grid container spacing={2}>
            <Grid size={6}>
              <h1 className="top">
                Luxurious & Premium Essential Daily Use Cosmetic Product
              </h1>
            </Grid>

            <Grid size={6}>
              <p>
                Duis ultricies lacus sed turpis tincidunt id aliquet risus
                feugiat. Gravida dictum fusce ut placerat orci. Et leo duis ut
                diam quam nulla porttitor massa. Ipsum nunc aliquet bibendum
                enim. Arcu bibendum at varius vel pharetra.
              </p>

              <Box
                sx={{
                  color: "rgba(235, 170, 109, 1)",

                  textAlign: "center",
                  mt: 3,
                }}
              >
                <Grid container spacing={8}>
                  <Grid item xs={4}>
                    <Typography variant="h2">12k</Typography>
                    <Link
                      sx={{
                        color: "black",
                        ":hover": { color: "rgba(243, 180, 121, 1)" },
                        fontWeight: "bold",
                      }}
                      href="#"
                      underline="none"
                    >
                      {"Beauty Product"}
                    </Link>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h2">5k</Typography>
                    <Link
                      sx={{
                        color: "black",
                        ":hover": { color: "rgba(243, 180, 121, 1)" },
                        fontWeight: "bold",
                      }}
                      href="#"
                      underline="none"
                    >
                      {"Employees"}
                    </Link>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h2">20k</Typography>
                    <Link
                      sx={{
                        color: "black",
                        ":hover": { color: "rgba(243, 180, 121, 1)" },
                        fontWeight: "bold",
                      }}
                      href="#"
                      underline="none"
                    >
                      {"Happy Users"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* essential section end */}

        {/* footer section start */}
        <Footer></Footer>
        {/* footer section end */}
     
    </div>
  );
};

export default About;
