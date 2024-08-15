import styled from "styled-components";

export const SpinningImage = styled.div<{ isPlaying: boolean }>`
  display: inline-block;
  border-radius: 50%;
  animation: ${({ isPlaying }) =>
    isPlaying ? "spin 5s linear infinite" : "none"};

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const styles = {
  boxGeneral: {
    position: "relative",
    padding: "30px 5px 20px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "auto",
  },
  boContent: {
    background: "black",
  },
};
