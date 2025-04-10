import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { CircularProgress, Container, Typography, Box } from "@mui/material";
import Footers from "@/components/Foouters/Index";
import { ApiUser } from "../../../components/adapters/adapter";
import { toast } from "react-toastify";

export default function Profile() {
  const [name, setName] = useState<string | null>("");
  const [picture, setPicture] = useState<string | null>(null);

  const getName = () => {
    const userName = localStorage.getItem("authenticatedUser");
    setName(userName);
  };

  const getImage = async () => {
    try {
      const response = await axios.get(ApiUser);
      const authenticatedUser = localStorage.getItem("authenticatedUser");
      const user = response.data.find(
        (user: { name: string }) => user?.name === authenticatedUser
      );

      if (user && user?.perfilImage) {
        setPicture(user?.perfilImage);
      }
    } catch (error) {
      toast.error(error ? (error as string) : "Ha ocurrido una incidencia.", {
        autoClose: 2000,
        hideProgressBar: true,
      });
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
