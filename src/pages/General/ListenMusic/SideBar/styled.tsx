import styled from "styled-components";

export const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #1976d2;
  border-radius: 10px;
  height: 98.5%;
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const BoxMobile = styled.div`
  position: absolute;
  top: 110px;
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
  @media (max-width: 600px) {
    display: flex;
  }
`;
