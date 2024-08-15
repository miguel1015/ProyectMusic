import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

interface User {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  /**
   *Rutas
   */
  const router = useRouter();

  /**
   *Validaciones del yup.
   */
  const schema = yup.object({
    name: yup.string().required("El nombre es necesario"),
    email: yup
      .string()
      .email("Ingrese un email válido")
      .required("Correo electrónico es requerido"),
    password: yup
      .string()
      .required("Contraseña es requerida")
      .min(6, "La contraseña tiene que ser mayor a 6 dígitos"),
  });

  /**
   * UseForm
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /**
   * States
   */
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  /**
   * Función para escoger la imagen.
   */
  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const typeImage: string[] = [
      "img",
      "jpg",
      "png",
      "jpeg",
      "tiff",
      "psd",
      "svg",
    ];
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      const fileNameParts = selectedFile.name.split(".");
      const fileExtension =
        fileNameParts[fileNameParts.length - 1].toLowerCase();

      if (typeImage.includes(fileExtension)) {
        setSelectedImage(selectedFile);
        toast.success("¡Imagen encontrada!");
      } else {
        toast.error("¡Archivo no compatible!");
        event.target.value = "";
      }
    }
  };

  /**
   *Función crear.
   */
  const onSubmit = async (data: User) => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/users/exists?email=${encodeURIComponent(
          data.email
        )}`
      );

      if (!!response?.data?.exists) {
        toast.error("¡El usuario ya está registrado!");
      } else if (!selectedImage) {
        toast.info("¡Por favor escoja una imagen!");
      } else if (!response?.data?.exists) {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("password", data.password);
        formData.append("profileImage", selectedImage);

        const createResponse = await axios.post(
          "http://localhost:9000/api/users/Register",
          formData
        );

        if (createResponse) {
          toast.success("¡Usuario creado con éxito!", {
            autoClose: 2000,
            hideProgressBar: true,
          });
          router.replace("/Login/Index");
        } else {
          toast.error("¡Error al crear!", {
            autoClose: 2000,
            hideProgressBar: true,
          });
        }
      }
    } catch (error) {
      toast.error("¡Error al crear un usuario!");
    }
  };

  return (
    <Box>
      <Head>
        <title>Register</title>
      </Head>
      <ThemeProvider theme={createTheme()}>
        <Grid
          container
          component="main"
          sx={{ height: "auto", background: "black" }}
        >
          <CssBaseline />
          <Grid
            item
            xs={4}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "https://picsum.photos/1600/900?random=1",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={8}
            sm={8}
            md={3}
            component={Paper}
            elevation={5}
            square
            sx={{
              margin: "30px 0px 10px 150px",
              height: "auto",
              borderRadius: "15px",
            }}
          >
            <Box
              sx={{
                margin: "2rem auto",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "425px",
                backgroundColor: "#FFF",
                borderRadius: "10px",
                boxShadow: "0 10px 20px 0 rgba(#999, .25)",
                padding: ".75rem",
              }}
            >
              <Box
                sx={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  paddingBottom: "65%",
                  backgroundImage:
                    "url('https://source.unsplash.com/random?bands')",
                  backgroundRepeat: "no-repeat",
                  position: "relative",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    left: "10%",
                    top: "15%",
                    right: "10%",
                    fontSize: "1.75rem",
                    fontWeight: "700",
                    color: "#000000",
                    lineHeight: "1.222",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  Registrarse
                  <Typography
                    sx={{
                      display: "block",
                      fontSize: ".75em",
                      fontWeight: "400",
                      marginTop: ".25em",
                    }}
                  >
                    Crea tu cuenta ahora
                  </Typography>
                </Typography>
              </Box>
              <Box>
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
              </Box>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                sx={{ mt: 1 }}
              >
                <TextField
                  required
                  fullWidth
                  id="name"
                  margin="normal"
                  label="Name"
                  autoFocus
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
                <TextField
                  required
                  fullWidth
                  id="email"
                  margin="normal"
                  label="Email Address"
                  autoComplete="email"
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />

                <label htmlFor="profileImage">
                  <input
                    style={{ display: "none" }}
                    accept="image/*"
                    id="profileImage"
                    type="file"
                    onChange={handleImageSelect}
                    name="profileImage"
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload image"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                  {selectedImage?.name || "Cargar imagen"}
                </label>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/" variant="body2" underline="none">
                      Inicio
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/Login/Index" variant="body2" underline="none">
                      ¿Ya tienes una cuenta? Accede aquí
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
}
