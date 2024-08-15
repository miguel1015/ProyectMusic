import React, { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import axios from "axios";
import {
  Container,
  CssTextField,
  Form,
  FormButton,
  FormParagraph,
  HeaderH2,
  HeaderH4,
  Left,
  Right,
} from "./styled";
import Head from "next/head";
import { CircularProgress } from "@mui/material";

interface User {
  email: string;
  password: string;
}

interface TDataUser {
  email: string;
  name: string;
  password: string;
  profileImage: string;
}

function Login() {
  /**
   *Rutas.
   */
  const router = useRouter();

  /**
   *States.
   */
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser] = useState<TDataUser[]>([]);

  /**
   *Consultas de la API.
   */
  const verApi = "http://localhost:9000/api//users/GetAll";
  const ApiToken = "http://localhost:9000/api//users/SigIn";

  /**
   *Validaciones del yup
   */
  const schema = yup.object({
    email: yup.string().required("Campo requerido"),
    password: yup.string().required("Contraseña es requerida"),
  });

  /**
   *UseForm.
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /**
   *Consulta de APi
   */
  useEffect(() => {
    const result = async () => {
      try {
        const data = await axios.get(verApi);
        setDataUser(data?.data);
      } catch (error) {
        return error;
      }
    };
    result();
  }, []);

  /**
   *Función para acceder a la vista
   */
  const onSubmits = async (data: User) => {
    try {
      const foundUser = dataUser.find(
        (user: User) =>
          user?.email === data?.email && user?.password === data?.password
      );

      if (foundUser) {
        const response = await axios.post(ApiToken, data);

        if (response.status === 200) {
          const token = response?.data?.data?.token;
          localStorage.setItem("token", token);
          localStorage.setItem("authenticatedUser", foundUser?.name);

          setLoading(true);
          toast.success("¡Ha iniciado sesión correctamente!", {
            autoClose: 2000,
            hideProgressBar: true,
          });
          router.replace("/General/Home/Index");
        } else {
          toast.error("¡Error en la autenticación!", {
            autoClose: 2000,
            hideProgressBar: true,
          });
        }
      } else {
        toast.error("¡Usuario o contraseña incorrecta!", {
          autoClose: 2000,
          hideProgressBar: true,
        });
      }
    } catch (error) {
      toast.error("¡Perfil incorrecto!", {
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <Left>
        <HeaderH2>Bienvenido</HeaderH2>
        <HeaderH4>Ingresa con tu cuenta</HeaderH4>
        <Form onSubmit={handleSubmit(onSubmits)}>
          <CssTextField
            type="email"
            label="Email"
            id="email"
            margin="normal"
            autoComplete="email"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <CssTextField
            type="password"
            id="Password"
            margin="normal"
            label="Password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <FormParagraph>
            <Link href="/" underline="none">
              Inicio
            </Link>
            <Link href="/Register/Index" underline="none">
              Crear una cuenta
            </Link>
          </FormParagraph>
          <FormButton>
            {loading ? (
              <CircularProgress size={20} sx={{ color: "white" }} />
            ) : (
              "LOGIN"
            )}
          </FormButton>
        </Form>
      </Left>
      <Right />
    </Container>
  );
}

export default Login;
