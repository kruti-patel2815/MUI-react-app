import React from "react";
import Box from "@mui/material/Box";
import logo from "../img/logo.png";
import Grid from "@mui/material/Grid";
const Footer = () => {
  return (
    <div>
      <Box className="footer">
        <Box className="footer-top">
          <Box className="footer-left">
            <Grid container spacing={2}>
              <Grid size={6}>
                <img src={logo} alt="" width="100px" />
                <p>
                  Sed viverra tellus in hac habitasse platea dictumst
                  vestibulum. Mauris augue neque gravida in. In cursus turpis
                  massa tincidunt.{" "}
                </p>
              </Grid>
              <Grid size={6}>
                <h6 className="head">Newsletter</h6>
                <p>
                  Signup for our newsletter to stay up to date on sales and
                  events.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <hr></hr>
        <Box className="footer-bottom">
          <Grid container spacing={2}>
            <Grid size={4}>
              <Box className="about">
                    <h3>About</h3>
                    <a href="">Career</a>
                    <a href="">Stockists</a>
                    <a href="">Shop Locator</a>
                    <a href="">Contact</a>
              </Box>
            </Grid>
            <Grid size={4}>
              <Box className="help">
                    <h3>Help</h3>
                    <a href="">Shipping & Returns</a>
                    <a href="">Track Order</a>
                    <a href="">FAQ </a>
                    <a href="">Product Returns</a>
                    <a href="">Checkout</a>
              </Box>
            </Grid>
            <Grid size={4}>
              <Box className="information">
                    <h3>Information</h3>
                    <a href="">Store Information</a>
                    <a href="">About Store</a>
                    <a href="">Latest Products</a>
                    <a href="">New Discounts</a>
                    <a href="">Sale Products</a>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <hr></hr>
        <Box>
            
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
