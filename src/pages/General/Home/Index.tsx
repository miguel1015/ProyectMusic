/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useEffect, useState, useMemo } from "react";
import {
  Circle,
  CirclesContainer,
  Container,
  Content,
  GlitchH2,
  H2TypeMusic,
  HoverTextContainer,
  HoverTextContent,
  ImageContainer,
  Imageted,
  Section,
  SectionCol,
  SectionFluidMain,
  SectionImage,
  SectionIn,
  SectionRow,
} from "./styled";

export default function Home() {
  const imagesTypeMusic = [
    {
      src: "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91SEwgvZ6LL._UF1000,1000_QL80_.jpg",
      alt: "",
      title: "Gospel",
    },
    {
      src: "https://universalmusicstore.com.co/cdn/shop/products/602547482778_-_AVICII_-_STORIES_-_CDX1-_A_1024x.png?v=1629729413",
      alt: "",
      title: "Electronic",
    },
    {
      src: "https://coldplaymag.files.wordpress.com/2015/11/2015-12-04-a-head-full-of-dreams.jpg",
      alt: "",
      title: "Pop",
    },
    {
      src: "https://m.media-amazon.com/images/I/61HZsw4F5VL._UF1000,1000_QL80_.jpg",
      alt: "",
      title: "Rock",
    },
    {
      src: "https://lastfm.freetls.fastly.net/i/u/ar0/94028f5dd89f3d070412cc8ec34ea86d.jpg",
      alt: "",
      title: "Rap",
    },
    {
      src: "https://juanluisguerra.com/wp-content/uploads/2021/05/rosalia-live-cover.jpg",
      alt: "",
      title: "Latino",
    },
  ];

  const imagesSlider = useMemo(
    () => [
      "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/2c/4e/6b/2c4e6baa-6b9b-9438-7fd8-19a0a71169b0/00050087368784.rgb.jpg/1200x1200bb.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/4c/87/6a/4c876a99-f183-78d5-2eae-5f86345895ff/634904152062.png/1200x1200bf-60.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/5e/07/1b/5e071b10-2351-9d82-426c-f796b25fb9be/0617465356858.jpg/1200x1200bf-60.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8c/b0/d7/8cb0d7c9-b7d6-5780-2621-7097586acaf8/075679703699.jpg/1200x1200bf-60.jpg",
      "https://www.lahiguera.net/musicalia/artistas/shakira/disco/5863/shakira_shakira-portada.jpg",
    ],
    []
  );
  const [selectedImage, setSelectedImage] = useState(imagesSlider[0]);
  const [animationId, setAnimationId] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentIndex = imagesSlider.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % imagesSlider.length;
      setSelectedImage(imagesSlider[nextIndex]);
      setAnimationId(animationId + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [selectedImage, imagesSlider, animationId]);

  const handleImageClick = (image: string) => {
    setAnimationId(animationId + 1);
    setSelectedImage(image);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box>
        <Head>
          <title>Home</title>
        </Head>
        <main>
          <Box sx={{ width: "auto", textAlign: "center" }}>
            <GlitchH2>
              <span> Una experiencia única, solo en MusicMike</span>
            </GlitchH2>
            <Typography variant="subtitle1">
              Con nuestras funciones conseguirás la experiencia musical más
              personalizada que existe.
            </Typography>
          </Box>
          <Container>
            <Content>
              <ImageContainer>
                <Imageted
                  src={selectedImage}
                  alt="Selected"
                  isSelected={true}
                  animationId={animationId}
                />
              </ImageContainer>
              <CirclesContainer>
                {imagesSlider.map((image, index) => (
                  <Circle
                    key={index}
                    style={{ backgroundImage: `url(${image})` }}
                    isSelected={selectedImage === image}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </CirclesContainer>
            </Content>
          </Container>

          <Box sx={{ width: "auto", marginTop: "5%", marginBottom: "20px" }}>
            <H2TypeMusic>Música de todo tipo</H2TypeMusic>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                md={8}
                lg={8}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <SectionFluidMain>
                  <SectionRow>
                    {imagesTypeMusic.map((image, index) => (
                      <SectionCol key={index}>
                        <Section>
                          <SectionIn>
                            <SectionImage src={image.src} alt={image.alt} />
                          </SectionIn>
                        </Section>
                        <HoverTextContainer>
                          <HoverTextContent>{image.title}</HoverTextContent>
                        </HoverTextContainer>
                      </SectionCol>
                    ))}
                  </SectionRow>
                </SectionFluidMain>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              width: "100%",
              height: "150px",
              flexDirection: { xs: "row", md: "row" },
            }}
          >
            <Box>
              <img
                src="https://e-cdns-assets.dzcdn.net/common/images/apple-store-badge/es-es.svg"
                alt="Apple Store Badge"
                style={{ width: "100%", maxWidth: "270px", height: "auto" }}
              />
            </Box>
            <Box>
              <img
                src="https://e-cdns-assets.dzcdn.net/common/images/play-store-badge/es-es.svg"
                alt="Play Store Badge"
                style={{ width: "100%", maxWidth: "140px", height: "auto" }}
              />
            </Box>
          </Box>
        </main>
      </Box>
    </Box>
  );
}
