import React from "react";
import {
  ButtonPrimary,
  ButtonSecondary,
  ContainerWhy,
  ContentImgeFirst,
  ContentImgeFour,
  ContentImgeSecond,
  ContentImgeThird,
  ContentParagraph,
  FeatureList,
  FeatureListSecond,
  H2Title,
  ListWhyLi,
  ListWhyUl,
  PH5,
  ParagraphSubtitle,
  ParagraphTitle,
  PricingBox,
  PricingBoxContainer,
  PricingBoxImage,
  StyledTitle,
} from "./styled";
import Head from "next/head";

export default function Price() {
  return (
    <div>
      <Head>
        <title>Price</title>
      </Head>
      <h1 style={{ textAlign: "center" }}>Pick the best plan for you</h1>
      <PricingBoxContainer>
        <PricingBox>
          <StyledTitle>Gratuito</StyledTitle>
          <PH5>
            <sup>$</sup>0<sub>/mo</sub>
          </PH5>
          <FeatureList>
            <li>
              <strong>1 Cuenta</strong>
            </li>
            <li>
              <strong>30 Segundos de música</strong>
            </li>
            <li>
              <strong>Reproduce canciones solo con conexión</strong>
            </li>
            <li>
              <strong>Usa la opción prepaga o suscríbete</strong>
            </li>
          </FeatureList>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </PricingBox>

        <PricingBoxImage>
          <StyledTitle>Premium</StyledTitle>
          <PH5>
            <sup>$</sup>39<sub>/mo</sub>
          </PH5>
          <FeatureListSecond>
            <li>
              <strong>2 cuentas Premium para parejas que conviven</strong>
            </li>
            <li>
              <strong>Bloquea la música explícita</strong>
            </li>
            <li>
              <strong>
                Reproduce tus canciones en cualquier lugar, incluso sin conexión
              </strong>
            </li>
            <li>
              <strong>Reproduce canciones en el orden que quieras</strong>
            </li>
          </FeatureListSecond>
          <ButtonSecondary>Get Started</ButtonSecondary>
        </PricingBoxImage>

        <PricingBox>
          <StyledTitle>Platinium</StyledTitle>
          <PH5>
            <sup>$</sup>89<sub>/mo</sub>
          </PH5>
          <FeatureList>
            <li>
              <strong>6 cuentas Premium para familiares que conviven</strong>
            </li>
            <li>
              <strong>Reproduce canciones en el orden que quieras</strong>
            </li>
            <li>
              <strong>Escucha música sin anuncios</strong>
            </li>
            <li>
              <strong>Disfruta contenido en modo offline</strong>
            </li>
          </FeatureList>
          <ButtonPrimary>Get Started</ButtonPrimary>
        </PricingBox>
      </PricingBoxContainer>

      <ContainerWhy>
        <header style={{ marginBottom: "72px" }}>
          <H2Title>¿Por qué cambiarse a Premium?</H2Title>
        </header>
        <ListWhyUl>
          <ListWhyLi>
            <ContentImgeFirst />
            <ContentParagraph>
              <ParagraphTitle>Descarga tu música.</ParagraphTitle>
              <ParagraphSubtitle>
                Escúchala desde cualquier lugar.
              </ParagraphSubtitle>
            </ContentParagraph>
          </ListWhyLi>
          <ListWhyLi>
            <ContentImgeSecond />
            <ContentParagraph>
              <ParagraphTitle>Escucha música sin anuncios.</ParagraphTitle>
              <ParagraphSubtitle>
                Disfruta de tu música sin interrupciones.
              </ParagraphSubtitle>
            </ContentParagraph>
          </ListWhyLi>
          <ListWhyLi>
            <ContentImgeThird />
            <ContentParagraph>
              <ParagraphTitle>
                Reproduce canciones en el orden que quieras.
              </ParagraphTitle>
              <ParagraphSubtitle>
                Cualquier canción en cualquier orden.
              </ParagraphSubtitle>
            </ContentParagraph>
          </ListWhyLi>
          <ListWhyLi>
            <ContentImgeFour />
            <ContentParagraph>
              <ParagraphTitle>Mejor calidad de sonido.</ParagraphTitle>
              <ParagraphSubtitle>Siente el sonido.</ParagraphSubtitle>
            </ContentParagraph>
          </ListWhyLi>
        </ListWhyUl>
      </ContainerWhy>
    </div>
  );
}
