import styled from "@emotion/styled";

export const BoxNavbarLogin = styled.div`
  height: auto;
  display: flex;
  justify-content: space-around;
  background-color: "black";

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const BoxTitleONe = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

export const TypographyFirstTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 400%;
  margin: 20px 0;
  text-align: center;
`;
export const TypographyText = styled.h1`
  display: flex;
  justify-content: center;
  width: 50%;
  line-height: 45px;
  text-align: center;
  margin: 0 auto;
  padding: 0.5%;

  @media (max-width: 767px) {
    font-size: 200%;
    line-height: 30px;
    width: 100%;
  }
`;

export const BoxSongsFavorite = styled.div`
  padding: 1%;
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  width: 100%;
`;
