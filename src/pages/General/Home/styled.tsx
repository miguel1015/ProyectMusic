import styled, { keyframes } from "styled-components";

// Text h1 ----------------------------------------------------------------
export const glitchAnimation = keyframes`
  0% {
    clip-path: polygon(
      0% 12%, 53% 12%, 53% 26%, 25% 26%, 25% 86%, 31% 86%, 31% 0%, 53% 0%, 53% 84%, 92% 84%, 92% 82%, 70% 82%, 70% 29%, 78% 29%, 78% 65%, 69% 65%, 69% 66%, 77% 66%, 77% 45%, 85% 45%, 85% 26%, 97% 26%, 97% 28%, 84% 28%, 84% 34%, 54% 34%, 54% 89%, 30% 89%, 30% 58%, 83% 58%, 83% 5%, 68% 5%, 68% 36%, 62% 36%, 62% 1%, 12% 1%, 12% 34%, 60% 34%, 60% 57%, 98% 57%, 98% 83%, 1% 83%, 1% 53%, 91% 53%, 91% 84%, 8% 84%, 8% 83%, 4% 83%
    );
  }

  5% {
    clip-path: polygon(
      0% 29%, 44% 29%, 44% 83%, 94% 83%, 94% 56%, 11% 56%, 11% 64%, 94% 64%, 94% 70%, 88% 70%, 88% 32%, 18% 32%, 18% 96%, 10% 96%, 10% 62%, 9% 62%, 9% 84%, 68% 84%, 68% 50%, 52% 50%, 52% 55%, 35% 55%, 35% 87%, 25% 87%, 25% 39%, 15% 39%, 15% 88%, 52% 88%
    );
  }

  30% {
    clip-path: polygon(
      0% 53%, 93% 53%, 93% 62%, 68% 62%, 68% 37%, 97% 37%, 97% 89%, 13% 89%, 13% 45%, 51% 45%, 51% 88%, 17% 88%, 17% 54%, 81% 54%, 81% 75%, 79% 75%, 79% 76%, 38% 76%, 38% 28%, 61% 28%, 61% 12%, 55% 12%, 55% 62%, 68% 62%, 68% 51%, 0% 51%, 0% 92%, 63% 92%, 63% 4%, 65% 4%
    );
  }

  45% {
    clip-path: polygon(
      0% 33%, 2% 33%, 2% 69%, 58% 69%, 58% 94%, 55% 94%, 55% 25%, 33% 25%, 33% 85%, 16% 85%, 16% 19%, 5% 19%, 5% 20%, 79% 20%, 79% 96%, 93% 96%, 93% 50%, 5% 50%, 5% 74%, 55% 74%, 55% 57%, 96% 57%, 96% 59%, 87% 59%, 87% 65%, 82% 65%, 82% 39%, 63% 39%, 63% 92%, 4% 92%, 4% 36%, 24% 36%, 24% 70%, 1% 70%, 1% 43%, 15% 43%, 15% 28%, 23% 28%, 23% 71%, 90% 71%, 90% 86%, 97% 86%, 97% 1%, 60% 1%, 60% 67%, 71% 67%, 71% 91%, 17% 91%, 17% 14%, 39% 14%, 39% 30%, 58% 30%, 58% 11%, 52% 11%, 52% 83%, 68% 83%
    );
  }

  76% {
    clip-path: polygon(
      0% 26%, 15% 26%, 15% 73%, 72% 73%, 72% 70%, 77% 70%, 77% 75%, 8% 75%, 8% 42%, 4% 42%, 4% 61%, 17% 61%, 17% 12%, 26% 12%, 26% 63%, 73% 63%, 73% 43%, 90% 43%, 90% 67%, 50% 67%, 50% 41%, 42% 41%, 42% 46%, 50% 46%, 50% 84%, 96% 84%, 96% 78%, 49% 78%, 49% 25%, 63% 25%, 63% 14%
    );
  }

  90% {
    clip-path: polygon(
      0% 41%, 13% 41%, 13% 6%, 87% 6%, 87% 93%, 10% 93%, 10% 13%, 89% 13%, 89% 6%, 3% 6%, 3% 8%, 16% 8%, 16% 79%, 0% 79%, 0% 99%, 92% 99%, 92% 90%, 5% 90%, 5% 60%, 0% 60%, 0% 48%, 89% 48%, 89% 13%, 80% 13%, 80% 43%, 95% 43%, 95% 19%, 80% 19%, 80% 85%, 38% 85%, 38% 62%
    );
  }

  1%, 7%, 33%, 47%, 78%, 93% {
    clip-path: none;
  }
`;

export const GlitchH2 = styled.h2`
  font-size: clamp(30px, 5vw, 70px);
  line-height: 1;
  display: inline-block;
  color: #fff;
  z-index: 2;
  letter-spacing: 5px;
  filter: drop-shadow(0 1px 3px);
  animation: ${glitchAnimation} 5s step-end infinite;

  &.layers {
    position: relative;
  }
`;

// Slider ----------------------------------------------------------------
export const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  height: auto;
`;

export const CirclesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  text-align: center;
  padding-top: 20px;
`;

const fadeIn = (blurValue: number) => keyframes`
  from {
    opacity: 0;
    filter: blur(${blurValue}px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
`;

export const Imageted = styled.img<{
  isSelected: boolean;
  animationId: number;
}>`
  width: 100%;
  max-width: 700px;
  border: 5px solid #bdc3c7;
  border-radius: 16px;
  box-shadow: 0 8px 25px 0 rgba(16, 39, 112, 0.3);
  transition: opacity 0.5s ease;
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  animation: ${({ animationId }) => fadeIn(animationId)} 0.5s ease forwards;
  @media (max-width: 767px) {
    width: 95%;
  }
`;

const slideAnimation = keyframes`
  0%, 100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
  14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; }
  28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; }
  42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; }
  56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; }
  70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; }
  84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; }
`;

export const Circle = styled.div<{ isSelected: boolean }>`
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border: 3px solid #bdc3c7;
  border-radius: 50%;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
  animation: ${slideAnimation} 6s linear infinite alternate forwards;
  &:hover {
    box-shadow: ${({ isSelected }) =>
      isSelected ? "0 8px 25px 0 rgba(16,39,112,.3)" : "none"};
    transform: ${({ isSelected }) => (isSelected ? "scale(1.3)" : "none")};
  }
  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;

//----------------------------------------------------------------

export const lightsAnimation = keyframes`
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  30% {
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  40% {
    color: hsl(230, 100%, 95%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }
  70% {
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  100% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
`;

export const H2TypeMusic = styled.h2`
  text-align: center;
  margin: auto;
  font-size: 3.5rem;
  font-weight: 300;
  animation: ${lightsAnimation} 5s 750ms linear infinite;
`;

export const SectionFluidMain = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  margin-right: auto;
  margin-left: auto;
  max-width: 80%;
  padding-top: 100px;
  padding-right: 15px;
  padding-left: 15px;
  width: calc(100% - 40px);
`;

export const SectionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export const Section = styled.div`
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;
  padding: 15px;
`;

export const SectionIn = styled.div`
  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
`;

export const SectionImage = styled.img`
  display: block;
  width: 100%;
  height: 70%;
  transition: transform 250ms linear;
`;

export const HoverTextContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
  pointer-events: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-self: center;
  mix-blend-mode: difference;
`;

export const HoverTextContent = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 1000;
  font-size: 8vw;
  line-height: 1;
  color: #fff;
  opacity: 0;
  transform: scale(0.8);
  transition: transform 250ms linear, opacity 250ms ease;
`;

export const SectionCol = styled.div`
  position: relative;
  width: calc(50% - 15px);
  max-width: calc(50% - 15px);
  margin-right: 15px;
  margin-bottom: 15px;

  &:nth-child(2n) {
    margin-right: 0;
  }

  opacity: 1;
  transition: opacity 250ms linear;
  filter: brightness(1);

  &:hover {
    opacity: 0.5;

    & > ${Section} > ${SectionIn} > ${SectionImage} {
      transform: scale(1.1) rotate(-3deg);
    }

    & ${HoverTextContainer} ${HoverTextContent} {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
