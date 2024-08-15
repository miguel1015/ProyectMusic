import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { CircularProgress, Container, Typography, Box } from "@mui/material";
import Footers from "@/components/Foouters/Index";

export default function Profile() {
  const [name, setName] = useState<any>("");
  const [picture, setPicture] = useState<any>(null);

  const getName = () => {
    const userName = localStorage.getItem("authenticatedUser");
    setName(userName);
  };

  const getImage = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/users/GetAll"
      );
      const authenticatedUser = localStorage.getItem("authenticatedUser");
      const user = response.data.find(
        (user: any) => user.name === authenticatedUser
      );
      console.log("✅✅", user);

      if (user && user.profileImage) {
        setPicture("data:image/png;base64," + user.profileImage);
      }
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
    }
  };

  useEffect(() => {
    getName();
    getImage();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Container style={{ flex: "1.5" }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {name}!
        </Typography>
        {picture ? (
          <Image src={picture} alt="Profile Image" width={500} height={500} />
        ) : (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={500}
          >
            <CircularProgress />
          </Box>
        )}
      </Container>

      <Footers />
    </div>
  );
}
