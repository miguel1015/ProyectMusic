import styled from "styled-components";

export const BoxGeneral = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    /* background-color: aliceblue; */
    display: flex;
    margin: 0 auto;
    width: 490px;
    flex-direction: column-reverse;
  }
`;

export const H1 = styled.h1`
  font-size: 50px;
  text-transform: uppercase;
  /* font-family: sans-serif; */
  letter-spacing: -3px;
  transition: 700ms ease;
  font-variation-settings: wght 311;
  margin-bottom: 0.8rem;
  color: white;
  outline: none;
  text-align: center;
  :hover {
    font-variation-settings: wght 582;
    letter-spacing: 1px;
  }
`;

export const BoxReproductor = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.1),
    #2a2a80
  );
  backdrop-filter: blur(8px);
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  z-index: 10;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 100%;
    display: block;
    text-align: center;
  }
`;

export const ContainerComponent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const DivIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export const SearchInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    letter-spacing: 1px;
  }

  &:focus {
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
