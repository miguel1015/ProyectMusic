import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import AlbumIcon from "@mui/icons-material/Album";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { BoxMobile, ContainerGeneral } from "./styled";

export default function SideBar() {
  //UseState.
  const [mobileOpenMenu, setMobileOpenMenu] = useState(false);

  //Links.
  const links = [
    { name: "Discover", to: "/General/ListenMusic/Index", icon: <HomeIcon /> },
    {
      name: "Around You",
      to: "/General/ListenMusic/pages/aroundYou/AroundYou",
      icon: <ChangeCircleIcon />,
    },
    {
      name: "Top Artists",
      to: "/General/ListenMusic/pages/TopArtists",
      icon: <AlbumIcon />,
    },
    {
      name: "Top Charts",
      to: "/General/ListenMusic/pages/TopCharts",
      icon: <ArtTrackIcon />,
    },
  ];

  return (
    <Box>
      <Box style={{ height: "100%" }}>
        <ContainerGeneral>
          <Box style={{ marginTop: "2.5rem" }}>
            {links.map((item) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: "0.5rem",
                    borderRadius: "50%",
                  }}
                />
                {item.icon}
                <Link
                  href={item.to}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    marginLeft: "10px",
                    padding: "25px 5px",
                    borderRadius: "5px",
                  }}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </Box>
        </ContainerGeneral>

        <Grid container sx={{ background: "red" }}>
          <Grid item xs={6} sm={false} md={false} lg={false}>
            <BoxMobile>
              {!mobileOpenMenu ? (
                <ListRoundedIcon
                  onClick={() => setMobileOpenMenu(true)}
                  sx={{
                    marginTop: "-1.3rem",
                    width: "2.3rem",
                    height: "2.3rem",
                    marginRight: "-5rem",
                    color: "white",
                    fontSize: "20%",
                  }}
                />
              ) : (
                <MenuOpenRoundedIcon
                  onClick={() => setMobileOpenMenu(false)}
                  sx={{
                    marginTop: "-1.3rem",
                    width: "2.3rem",
                    height: "2.3rem",
                    marginRight: "-5rem",
                    color: "white",
                  }}
                />
              )}
            </BoxMobile>
          </Grid>
        </Grid>
        {mobileOpenMenu ? (
          <div
            style={{
              position: "absolute",
              top: "0px",
              height: "120vh",
              width: "66.666667%",
              background:
                "linear-gradient(to top left, rgba(255, 255, 255, 0.1), #483D8B)",
              backdropFilter: "blur(16px)",
              zIndex: "10",
              padding: "1.5rem",
              transition: "left 0.3s ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "90%",
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "5rem",
                cursor: "pointer",
              }}
            >
              <MenuOpenRoundedIcon
                onClick={() => setMobileOpenMenu(false)}
                sx={{ fontSize: "40px" }}
              />
            </div>
            {links.map((item) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5rem",
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {item.icon}
                <Link
                  href={item.to}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    marginLeft: "10px",
                    padding: "25px 5px",
                    borderRadius: "5px",
                  }}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        ) : null}
      </Box>
    </Box>
  );
}
