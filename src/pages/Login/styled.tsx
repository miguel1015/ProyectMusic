import styled, { keyframes } from "styled-components";
import TextField from "@mui/material/TextField";

// Keyframes
export const moveAnimation = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;
export const leftAnimation = keyframes`
  0% {
    opacity: 0;
    width: 0;
  }
  100% {
    opacity: 1;
    padding: 20px 40px;
    width: 440px;
  }
`;
export const Container = styled.div`
  display: flex;
  height: 100vh;
`;
export const Left = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  animation: ${leftAnimation} 1s both 1s;
`;
export const Right = styled.div`
  flex: 1;
  background-color: black;
  transition: 1s;
  /* background-image: url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80); */
  background-image: url(https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const HeaderH2 = styled.h2`
  margin: 0;
  color: #bfb8fa;
  animation: ${moveAnimation} 0.4s both 2s;
`;
export const HeaderH4 = styled.h4`
  margin-top: 10px;
  font-weight: normal;
  font-size: 15px;
  color: white;
  animation: ${moveAnimation} 0.4s both 2.2s;
`;
export const Form = styled.form`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  animation: ${moveAnimation} 0.4s both 2.2s;
`;
export const FormParagraph = styled.p<{ error?: boolean }>`
  display: flex;
  justify-content: space-between;
  animation: ${moveAnimation} 0.4s both 2.3s;
  color: ${({ error }) => (error ? "rgb(220, 53, 69)" : "inherit")};
  > a {
    color: white;
    font-size: 14px;
  }
`;
export const FormButton = styled.button`
  padding: 12px 10px;
  border: 0;
  background: linear-gradient(to right, #de48b5 0%, #0097ff 100%);
  border-radius: 3px;
  margin-top: 10px;
  color: #fff;
  letter-spacing: 1px;
  font-family: "Rubik", sans-serif;
  cursor: pointer;
  animation: ${moveAnimation} 0.4s both 2.5s;
`;

export const CssTextField = styled(TextField)({
  "& label": {
    color: "#ffffff",
  },
  "& label.Mui-focused": {
    color: "rgba(25,118,210,255)",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgba(25,118,210,255)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ffffff",
    },
    "&:hover fieldset": {
      borderColor: "#ffffff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(25,118,210,255)",
    },
    "& .MuiInputBase-input": {
      color: "#ffffff",
    },
    "& .MuiInputLabel-root": {
      color: "#ffffff",
    },
  },
});
