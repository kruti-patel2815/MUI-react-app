import React from "react";
import Box from "@mui/material/Box";
import logo from "../img/logo.png";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Link from "@mui/material/Link";
import ad5 from "../img/payment-icons.webp";
const Footer = () => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <Box className="footer">
        <Box className="footer-top">
          <Box className="footer-left">
            <Grid container spacing={2}>
              <Grid size={6}>
                <img src={logo} alt="" width="100px" />
                <p className="p">
                  Sed viverra tellus in hac habitasse platea dictumst
                  vestibulum. Mauris augue neque gravida in. In cursus turpis
                  massa tincidunt.
                </p>
              </Grid>
              <Grid size={6}>
                <h6 className="head">Newsletter</h6>
                <p className="p">
                  Signup for our newsletter to stay up to date on sales and
                  events.
                </p>
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Email Adress"
                  style={{ width: 450, height: 40 }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <hr></hr>
        <Box className="footer-bottom">
          <Grid container spacing={2}>
            <Grid size={4}>
              <Box className="about">
                <h3 className="about1"> About</h3>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {["Career", "Stockists", "Shop Locator", "Contact"].map(
                    (text) => (
                      <Link
                        key={text}
                        href="#"
                        sx={{
                          color: "black",
                          textDecoration: "none",
                          "&:hover": {
                            color: "rgba(235, 170, 109, 1)",
                          },
                        }}
                      >
                        {text}
                      </Link>
                    )
                  )}
                </Box>
              </Box>
            </Grid>
            <Grid size={4}>
              <Box className="help">
                <h3 className="about1">Help</h3>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {[
                    "Shipping & Returns",
                    "Track Order",
                    "FAQ",
                    "Product Returns",
                    "Checkout",
                  ].map((text) => (
                    <Link
                      key={text}
                      href="#"
                      sx={{
                        color: "black",
                        textDecoration: "none",
                        "&:hover": {
                          color: "rgba(235, 170, 109, 1)",
                        },
                      }}
                    >
                      {text}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid size={4}>
              <Box className="information">
                <h3 className="about1">Information</h3>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {[
                    "Store Information",
                    "About Store",
                    "Latest Product",
                    "New Discount",
                    "Sale Product",
                  ].map((text) => (
                    <Link
                      key={text}
                      href="#"
                      sx={{
                        color: "black",
                        textDecoration: "none",
                        "&:hover": {
                          color: "rgba(235, 170, 109, 1)",
                        },
                      }}
                    >
                      {text}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <hr></hr>
        <Box className="footer-last">
          <Grid container spacing={2}>
            <Grid size={4}>
              <Box className="payment-icon">
                <img src={ad5} alt="ad1" />
              </Box>
            </Grid>
            <Grid size={4}>
              <Box className="mid">
                © 2023 lilac,
                <Link
                  href="#"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    "&:hover": {
                      color: "rgba(235, 170, 109, 1)",
                    },
                  }}
                >
                  {"Wedesign Tech"}
                </Link>
              </Box>
            </Grid>
            <Grid size={4}>
              <Box className="last" sx={{display:"flex"}}>
                <Link
                  href="#"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    "&:hover": {
                      color: "rgba(235, 170, 109, 1)",
                    },
                  }}
                >
                  {"Privacy Policy"} 
                </Link>|  
                <Link
                  href="#"
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    "&:hover": {
                      color: "rgba(235, 170, 109, 1)",
                    },
                  }}
                >
                  {"Terms"} 
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
