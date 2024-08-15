import styled from "styled-components";

export const Footer = styled.footer`
  background: #151414;
  width: 100%;
  /* position: relative; */
  /* @media (max-width: 540px) {
  } */
`;

export const stylesMaterial = {
  containerImg: {
    position: "relative",
    display: "block",
    // height: "40rem",
  },
  secondContainerGeneral: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  callUsText: {
    fontSize: "0.75rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#ffffff",
  },
  linkNumber: {
    display: "block",
    fontSize: "2rem",
    fontWeight: 500,
    color: "#ffffff",
    transition: "opacity 0.3s",
    "&:hover": {
      opacity: 0.75,
    },
    "@media (min-width: 640px)": {
      fontSize: "3rem",
    },
  },
  stylesWeek: {
    marginTop: "2rem",
    fontSize: "0.875rem",
    color: "#ffffff",
    "& > * + *": {
      marginTop: "0.25rem",
    },
  },
  boxSocialNetworks: {
    marginTop: "2rem",
    display: "flex",
    gap: "1.5rem",
  },
  stylesSocialNetwork: {
    color: "#ffffff",
    transition: "opacity 0.3s",
    "&:hover": { opacity: 0.75 },
  },
  textServices: {
    fontWeight: 500,
    textAlign: "center",
    color: "#ffffff",
  },
  divide: {
    width: "100%",
    marginTop: "3rem",
    borderTop: "1px solid #979797",
    paddingTop: "3rem",
  },
  boxFooterEnd: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    alignItems: { sm: "center" },
  },
  listFooterEnd: {
    display: "flex",
    flexWrap: "no-wrap",
    gap: "1rem",
    fontSize: "0.75rem",
    width: "auto",
  },
  linksFooterEnd: {
    color: "#ffffff",
    transition: "opacity 0.3s",
    "&:hover": {
      opacity: 0.75,
    },
  },
  textFooterEnd: {
    marginTop: { xs: "2rem", sm: "0" },
    fontSize: "0.75rem",
    color: "#ffffff",
  },
};
