/* eslint-disable @next/next/no-img-element */
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Grid, Typography, Link } from "@mui/material";
import { stylesMaterial } from "./styled";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Footers = () => {
  return (
    <Grid container sx={{ background: "black", height: "auto" }}>
      <Grid
        item
        xs={12}
        sm={5}
        md={4}
        lg={4}
        xl={4}
        sx={stylesMaterial.containerImg}
      >
        <img
          src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          alt=""
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Grid>

      <Grid
        container
        item
        xs={12}
        sm={7}
        md={8}
        lg={8}
        xl={8}
        sx={stylesMaterial.secondContainerGeneral}
      >
        <Grid item xs={12} sm={12} md={6} lg={7} xl={6}>
          <Typography component="span" sx={stylesMaterial.callUsText}>
            Call us
          </Typography>
          <Link href="#" underline="none" sx={stylesMaterial.linkNumber}>
            0123456789
          </Link>

          <Box sx={stylesMaterial.stylesWeek}>
            <List>
              <ListItem>Monday to Friday: 10am - 5pm</ListItem>
              <ListItem>Weekend: 10am - 3pm</ListItem>
            </List>
          </Box>

          <Box sx={stylesMaterial.boxSocialNetworks}>
            <Link
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
              sx={stylesMaterial.stylesSocialNetwork}
            >
              <FacebookIcon />
            </Link>

            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              sx={stylesMaterial.stylesSocialNetwork}
            >
              <InstagramIcon />
            </Link>

            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              sx={stylesMaterial.stylesSocialNetwork}
            >
              <TwitterIcon />
            </Link>

            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              sx={stylesMaterial.stylesSocialNetwork}
            >
              <GitHubIcon />
            </Link>

            <Link
              href="#"
              rel="noreferrer"
              target="_blank"
              sx={stylesMaterial.stylesSocialNetwork}
            >
              <TelegramIcon />
            </Link>
          </Box>
        </Grid>

        <Grid container item xs={12} sm={12} md={6} lg={5} xl={6}>
          <Grid>
            <Typography sx={stylesMaterial.textServices}>Services</Typography>

            <List sx={{ fontSize: "0.875rem" }}>
              <ListItem>
                <Link
                  href="#"
                  underline="none"
                  sx={stylesMaterial.stylesSocialNetwork}
                >
                  1on1 Coaching
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href="#"
                  underline="none"
                  sx={stylesMaterial.stylesSocialNetwork}
                >
                  Company Review
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href="#"
                  underline="none"
                  sx={stylesMaterial.stylesSocialNetwork}
                >
                  Accounts Review
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href="#"
                  underline="none"
                  sx={stylesMaterial.stylesSocialNetwork}
                >
                  HR Consulting
                </Link>
              </ListItem>

              <ListItem>
                <Link
                  href="#"
                  underline="none"
                  sx={stylesMaterial.stylesSocialNetwork}
                >
                  SEO Optimization
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid>
            <Typography sx={stylesMaterial.textServices}>Company</Typography>

            <List
              sx={{
                fontSize: "0.875rem",
              }}
            >
              <ListItem>
                <Link
                  href="#"
                  underline="none"
                  sx={stylesMaterial.stylesSocialNetwork}
                >
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  underline="none"
                  sx={stylesMaterial.stylesSocialNetwork}
                >
                  Meet the team
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  underline="none"
                  sx={stylesMaterial.stylesSocialNetwork}
                >
                  Accounts Review
                </Link>
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={stylesMaterial.divide}
        >
          <Box sx={stylesMaterial.boxFooterEnd}>
            <Grid item xs={12} sm={24} md={3.7} lg={4} xl={7}>
              <List sx={stylesMaterial.boxFooterEnd}>
                <ListItem>
                  <Link
                    href="#"
                    underline="none"
                    sx={stylesMaterial.linksFooterEnd}
                  >
                    Terms & Conditions
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    href="#"
                    underline="none"
                    sx={stylesMaterial.linksFooterEnd}
                  >
                    Privacy Policy
                  </Link>
                </ListItem>

                <ListItem>
                  <Link
                    href="#"
                    underline="none"
                    sx={stylesMaterial.linksFooterEnd}
                  >
                    Cookies
                  </Link>
                </ListItem>
              </List>
            </Grid>

            <Typography sx={stylesMaterial.textFooterEnd}>
              2022. Company Name. All rights reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footers;
