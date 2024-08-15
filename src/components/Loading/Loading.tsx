import { FC } from "react";
import styled, { keyframes } from "styled-components";

const animationImg = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.4; }
    100% { opacity: 1; }
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
  animation: ${animationImg} 2s infinite;
`;

export interface ISize {
  width: number | undefined;
  height: number | undefined;
}

const Loading: FC<{ size?: ISize }> = ({ size }) => {
  return (
    <div
      style={{
        width: size?.width || "100%",
        height: size?.height || "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo src="/Notas-Musicales.png" alt="Loading..." />
    </div>
  );
};

export default Loading;
