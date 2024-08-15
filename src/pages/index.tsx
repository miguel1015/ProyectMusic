/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  BoxNavbarLogin,
  BoxSongsFavorite,
  BoxTitleONe,
  TypographyFirstTitle,
  TypographyText,
} from "./styled";
import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import { Typography, CircularProgress } from "@mui/material";
import PianoIcon from "@mui/icons-material/Piano";
import { useMediaQuery } from "@mui/material";
import Link from "@mui/material/Link";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { useRouter } from "next/router";

function Index() {
  /**
   *UseRouter
   */
  const router = useRouter();

  /**
   *States.
   */
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingRegister, setLoadingRegister] = useState(false);

  const imagesButton = [
    {
      url: "https://steamuserimages-a.akamaihd.net/ugc/790861604718262214/BF378DC64034807BD2B11A1886563EDEF690CFE1/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
      title: "Register",
      width: "30%",
      href: "Register/Index",
    },
    {
      url: "/unCorazonWallpaper.png",
      title: "Leer más",
      width: "30%",
    },
  ];

  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const settings = {
    infinite: true,
    speed: 5000,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 200,
    slidesToShow: isSmallScreen ? 1 : 3,
    arrows: false,
  };

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));
  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    borderRadius: "25px",
    backgroundPosition: "center 50%",
  });
  const ImageDiv = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));
  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    borderRadius: "20px",
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));
  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  const imagesCarousel = [
    "https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNWRlNDUwMDdkMjE0MC5qcGciLCJyZXNpemUsMTAwMCJdfQ.Z1Im-vmCm1_BQQXZPzkyxUqdMkHBZEANyWZRBVZldlM.jpg",
    "https://i.pinimg.com/736x/21/67/97/2167971ddf656daf245aa3598cc3b224.jpg",
    "https://lastfm.freetls.fastly.net/i/u/ar0/c314a85354a8045a57cbe0799ce8939e.jpg",
    "https://m.media-amazon.com/images/I/91IE9WvAHyL._UF1000,1000_QL80_.jpg",
    "https://i.ebayimg.com/thumbs/images/g/wbMAAOSwrapk2lr4/s-l640.jpg",
    "https://akamai.sscdn.co/uploadfile/letras/albuns/6/9/d/7/1199701637678852.jpg",
  ];

  const imageLogos = [
    "https://mui.com/static/branding/companies/spotify-light.svg",
    "https://mui.com/static/branding/companies/amazon-light.svg",
    "https://mui.com/static/branding/companies/nasa.svg",
    "https://mui.com/static/branding/companies/netflix.svg",
    "https://mui.com/static/branding/companies/unity-light.svg",
    "https://mui.com/static/branding/companies/shutterstock-light.svg",
  ];

  /*
  Rutas
  */
  const buttonLogin = () => {
    setLoadingLogin(true);
    router.push("/Login/Index");
  };
  const buttonRegister = () => {
    setLoadingRegister(true);
    router.push("/Register/Index");
  };

  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "auto",
        marginBottom: "20px",
      }}
    >
      <Head>
        <title>Music Mike</title>
        <meta name="description" content="Loading..." />
      </Head>

      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            backgroundColor: "black",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography sx={{ fontSize: "xx-large" }}>
                <PianoIcon />
                M.M.
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: "10px",
              }}
            >
              <Grid item xs={8} sm={5} md={4} lg={4} xl={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  onClick={buttonLogin}
                >
                  {loadingLogin ? (
                    <CircularProgress size={20} sx={{ color: "white" }} />
                  ) : (
                    "INICIAR SESIÓN"
                  )}
                </Button>
              </Grid>
              <Grid item xs={8} sm={5} md={4} lg={4} xl={2}>
                <Button
                  onClick={buttonRegister}
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  {loadingRegister ? (
                    <CircularProgress size={20} sx={{ color: "white" }} />
                  ) : (
                    "Regístrate"
                  )}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TypographyFirstTitle>
              Música ilimitada por el tiempo que desees...
            </TypographyFirstTitle>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TypographyText>
              Obtén acceso ilimitado a nuestro catálogo de música y efectos de
              sonido para tus videos, transmisiones y podcast. Nuestra licencia
              viene con todos los derechos necesarios incluidos.
            </TypographyText>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box>
              <Box
                sx={{
                  minWidth: 300,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                {imagesButton.map((image) => (
                  <ImageButton
                    focusRipple
                    key={image.title}
                    style={{ width: image.width }}
                  >
                    <ImageSrc
                      style={{ backgroundImage: `url(${image.url})` }}
                    />
                    <ImageBackdrop />
                    <Link href={image.href}>
                      <ImageDiv>
                        <Typography
                          component="span"
                          variant="subtitle1"
                          color="inherit"
                          sx={{
                            position: "relative",
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                          }}
                        >
                          {image.title}
                          <ImageMarked />
                        </Typography>
                      </ImageDiv>
                    </Link>
                  </ImageButton>
                ))}
              </Box>
            </Box>
          </Grid>

          <Typography
            variant="h5"
            sx={{
              width: "100%",
              padding: 1,
              textAlign: "center",
            }}
          >
            Prueba gratuita de 30 días. Puedes cancelarla en cualquier momento.
          </Typography>
        </Grid>

        <BoxSongsFavorite>
          <Typography variant="h3">Tus canciones favoritas</Typography>
        </BoxSongsFavorite>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Slider {...settings}>
            {imagesCarousel.map((imageUrl: string, index: number) => (
              <Box key={index}>
                <img
                  src={imageUrl}
                  alt=""
                  width={100}
                  height={200}
                  style={{
                    objectFit: "cover",
                    margin: "0 auto",
                    width: "95%",
                    height: "100%",
                    borderRadius: "20px",
                    gap: "20px",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Grid>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5}>
            {imageLogos.map((image: string, index: number) => (
              <Grid item xs={4} sm={3} md={2} lg={2} xl={2} key={index}>
                <Image src={image} alt="" width={80} height={70} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Index;
