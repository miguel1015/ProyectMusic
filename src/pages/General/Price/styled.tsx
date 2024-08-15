import styled from "styled-components";

export const PricingBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PricingBox = styled.div`
  background-color: #ffffff;
  color: #000000;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.5);
  border-radius: 7px;
  flex: 1;
  padding: 70px 40px 70px 40px;
  margin: 2%;
  min-width: 250px;
  max-width: 350px;
  text-align: center;
`;

export const StyledTitle = styled.h5`
  text-transform: uppercase;
`;

export const PH5 = styled.p`
  margin: 24px 0;
  font-size: 36px;
  font-weight: 900;
  sub,
  sup {
    font-size: 16px;
    font-weight: 100;
  }
`;

export const FeatureList = styled.ul`
  padding: 0;
  list-style-type: none;
  li {
    font-weight: 100;
    padding: 12px 0;
    font-weight: 100;
  }
  li:not(:last-of-type) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
export const ButtonPrimary = styled.button`
  border-radius: 25px;
  border: none;
  background-color: #ec1362;
  color: #ffffff;
  cursor: pointer;
  padding: 10px 15px;
  margin-top: 20px;
  text-transform: uppercase;
  transition: all 0.1s ease-in-out;
  :hover {
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.5);
    transform: translateY(-3px);
  }
`;

export const PricingBoxImage = styled.div`
  background-color: #ffffff;
  color: #000000;
  border-radius: 7px;
  flex: 1;
  padding: 70px 40px 70px 40px;
  margin: 2%;
  min-width: 250px;
  max-width: 350px;
  text-align: center;
  background-image: url("https://images.unsplash.com/photo-1550029402-226115b7c579?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80");
  background-size: cover;
  background-position: center center;
  color: #ffffff;
  li {
    border-bottom-color: rgba(255, 255, 255, 1);
  }
`;

export const FeatureListSecond = styled.ul`
  padding: 0;
  list-style-type: none;
  li {
    font-weight: 100;
    padding: 12px 0;
    font-weight: 100;
  }
  li:not(:last-of-type) {
    border-bottom: 1px solid rgb(255, 255, 255);
  }
`;

export const ButtonSecondary = styled.button`
  border-radius: 25px;
  border: none;
  background-color: #ffffff;
  color: #000;
  cursor: pointer;
  padding: 10px 15px;
  margin-top: 20px;
  text-transform: uppercase;
  transition: all 0.1s ease-in-out;
  :hover {
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.5);
    transform: translateY(-3px);
  }
`;

////////////////////////////////////////////////////////////////

export const ContainerWhy = styled.div`
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  color: black;
  overflow: auto;
  background: white;
  margin-bottom: 40px;
  border-radius: 5px;
`;

export const H2Title = styled.h2`
  max-width: 670px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: -0.015em;
  font-weight: 900;
  padding: 0px;
`;

export const ListWhyUl = styled.ul`
  flex-wrap: nowrap;
  justify-content: space-between;
  display: flex;
  padding: 0px;
  margin: 0px;
  list-style: none;
  @media (max-width: 400px) {
    width: auto;
    display: flex;
    flex-direction: column;
  }
`;

export const ListWhyLi = styled.ul`
  display: block;
  width: 270px;
  flex-grow: 1;
  margin-bottom: 20px;
`;

export const ContentImgeFirst = styled.div`
  display: block;
  margin: 0px auto 40px;
  width: 142px;
  height: 142px;
  background-size: contain;
  background-image: url("https://i.scdn.co/image/ab671c3d0000f43009302fbaf6259b4c117c704f");
  background-position: center top;
`;

export const ContentImgeSecond = styled.div`
  display: block;
  margin: 0px auto 40px;
  width: 142px;
  height: 142px;
  background-size: contain;
  background-image: url("https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137");
  background-position: center top;
`;
export const ContentImgeThird = styled.div`
  display: block;
  margin: 0px auto 40px;
  width: 142px;
  height: 142px;
  background-size: contain;
  background-image: url("https://i.scdn.co/image/ab671c3d0000f43098292b95d24a697c20df5137");
  background-position: center top;
`;
export const ContentImgeFour = styled.div`
  display: block;
  margin: 0px auto 40px;
  width: 142px;
  height: 142px;
  background-size: contain;
  background-image: url("https://content-tooling.spotifycdn.com/images/4a4fc24a-69b3-476b-b6d9-e7597cda526e_enhance_icon_(1).svg");
  background-position: center top;
`;

export const ContentParagraph = styled.div`
  display: "block";
  text-align: "center";
  margin: "16px 0px";
`;

export const ParagraphTitle = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 21px;
  padding: 0px;
  line-height: 1.3em;
`;

export const ParagraphSubtitle = styled.p`
  width: 85%;
  margin: 0px auto;
`;
