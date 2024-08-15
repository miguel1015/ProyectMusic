/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import MenuItem from '@mui/material/MenuItem';
import { Controller, useController } from "react-hook-form";
import { DataGrid } from "@mui/x-data-grid";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Grid, Typography, Modal, Autocomplete } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "@mui/joy/Card";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

export default function About() {
  const [users, setUsers] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [profileList, setProfileList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // const { success, error, httpError, confirmation } = useSwal();
  // const { profile } = useContext(Store);
  // const { decript } = useCrypto();
  // const axios = useAxios();

  const schema = yup.object().shape({
    UserName: yup.string().email("Debe ser email").required("Field required"),
    ccmsId: yup.number().required("Field required"),
    isActive: yup.number().required("Campo requerido")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      UserName: "",
      ccmsId: null,
      isActive: null,
    },
  });

  // Get User list
  // const getUsers = () => {
  //   setSelected(null);
  //   axios
  //     .get("user/all")
  //     .then(({ data }) => {
  //       setUsers(data || []);
  //       setCurrentUsers(data || []);
  //     })
  //     .catch((ex) => httpError(ex.response.status));
  // };

  // Delete user
  // const disableItem = (id) =>
  //   confirmation().then(
  //     (response) =>
  //       response &&
  //       axios
  //         .del(`user/disable/${id}`)
  //         .then(() => success().then(() => getUsers()))
  //         .catch((ex) => error())
  //   );

  // const removeItem = (id) =>
  //   confirmation().then(
  //     (response) =>
  //       response &&
  //       axios
  //         .del(`user/remove/${id}`)
  //         .then(() => success().then(() => getUsers()))
  //         .catch((ex) => error())
  //   );

  const handleForm = (data) => {
    console.log("✅✅", data);
    console.log("😀😀😀", getValues());
  };



  console.log("🎈🎈🎈", getValues());

  // Save and update item
  // const handleSubmitForm = (user) => {
  //   const url = "user";

  //   user.id
  //     ? confirmation().then(
  //         (res) =>
  //           res &&
  //           axios
  //             .put(url, user)
  //             .then(() => success().then(() => getUsers()))
  //             .catch((ex) => error())
  //       )
  //     : axios
  //         .post(url, user)
  //         .then(() => success().then(() => getUsers()))
  //         .catch(() => error());
  // };

  // Execute when component load
  // useEffect(() => {
  //   getUsers();
  //   axios.get("profile/list").then(({ data }) => setProfileList(data || []));
  // }, []);

  const columns = [
    {
      field: "userName",
      headerName: "User",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "CCMS ID",
      headerName: "CCMS ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Status",
      headerName: "Status",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Editar",
      headerName: "Edit",
      alignItems: "center",
      align: "center",
      headerAlign: "center",
      flex: 1,
      renderCell: () => {
        return (
          <>
            <Button variant="outlined" color="success">
              Editar
            </Button>
          </>
        );
      },
    },
    {
      field: "Eliminar",
      headerName: "Delete",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return (
          <>
            <Button variant="outlined" color="error">
              Error
            </Button>
          </>
        );
      },
    },
  ];

  // Estilos
  const InputMaster = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
      borderRadius: 5,
      width: "100%",
      position: "relative",
      backgroundColor: theme.palette.mode === "light" ? "#F3F6F9" : "#1A2027",
      border: "1px solid",
      fontSize: 16,
      padding: "8px 10px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:focus": {
        borderColor: theme.palette.primary.main,
      },
      "& .MuiFormHelperText-root": {
        color: "red",
      },
    },
  }));


  const {
    field: {ref}  ,
} = useController({
    name,
    control,
    rules: {
        validate: (val) =>
            schema
                .validate(val)
                .catch(
                    (message) => message
                ),
    },
    defaultValue: null,
});


  return (
    <Grid
      container
      sx={{
        width: "90.2%",
        marginLeft: "13px",
        padding: "3%",
        display: "flex",
        flexFlow: "row nowrap",
        alignItems: "flex-start",
      }}
    >
      <Grid item xs={1} sm={4} md={3} lg={3} xl={2}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            color: "white",
            writingMode: "vertical-rl",
            textOrientation: "upright",
            fontWeight: "bold",
            fontSize: "80px",
            marginTop: "50px",
          }}
        >
          USERS
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid container>
          <Grid item xs={2} sm={2} md={1.3} lg={1} xl={1}>
            <Button
              sx={{
                backgroundColor: "#2f5597",
                color: "white",
                padding: "8px 14px",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#1f406d",
                },
              }}
              onClick={() => setOpenModal(true)}
            >
              {" "}
              New
            </Button>
          </Grid>
          <Grid item xs={5} sm={3} md={3} lg={2} xl={2}>
            <Button
              sx={{
                backgroundColor: "#2f5597",
                color: "white",
                padding: "8px 14px",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#1f406d",
                },
              }}
            >
              Bulk load
            </Button>
          </Grid>
        </Grid>

        <>
          <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={openModal}
            onClose={() => setOpenModal(false)}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                width: "20%",
                height: "auto",
                backgroundColor: "#2f5597",
                borderRadius: "25px",
              }}
            >
              <form onSubmit={handleSubmit(handleForm)}>
                <Grid
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: "white", marginTop: "10px" }}
                  >
                    Add Users
                  </Typography>
                </Grid>
                <Grid
                  container
                  spacing={1}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginTop: "5px",
                    marginLeft: "10px",
                  }}
                >
                  <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
                    <InputLabel
                      sx={{ color: errors?.UserName ? "red" : "white" }}
                    >
                      User
                    </InputLabel>
                    <InputMaster
                      id="UserName"
                      sx={{ border: errors?.UserName ? "red" : "white" }}
                      placeholder="User"
                      {...register("UserName")}
                      error={Boolean(errors.UserName)}
                    />
                    <InputLabel
                      sx={{ color: errors?.UserName ? "red" : "white" }}
                    >
                      {errors?.UserName?.message}
                    </InputLabel>
                  </Grid>

                  <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
                    <InputLabel
                      sx={{ color: errors?.ccmsId ? "red" : "white" }}
                    >
                      Ccmms Id
                    </InputLabel>
                    <InputMaster
                      id="ccmsId"
                      type="number"
                      placeholder="Ccmms Id"
                      {...register("ccmsId")}
                      onChange={(e) =>
                        setValue("ccmsId", parseInt(e.target.value), {
                          shouldValidate: true,
                        })}
                    />
                    <InputLabel
                      sx={{ color: errors?.ccmsId ? "red" : "white" }}
                    >
                      {errors?.ccmsId?.message}
                    </InputLabel>
                  </Grid>


                  {/* //////////////// */}
                  <Grid item xs={7} sm={7} md={7} lg={7} xl={7}>
                  <InputLabel sx={{ color: errors?.isActive ? "red" : "white", }} >
											Status
										</InputLabel>
                    <Select  ref={ref}
                    sx={{width: "100%", backgroundColor: "white"}}
                      {...register("isActive")}
                    >
                        <MenuItem value={1}>Active</MenuItem>
                        <MenuItem value={0}>Not Active</MenuItem>
                    </Select>
										<InputLabel sx={{ color: errors?.isActive ? "red" : "white", }} >
											{errors?.isActive?.message}
										</InputLabel>
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "#0070c0",
                      color: "white",
                      fontSize: "1rem",
                      marginBottom: "20px",
                      marginTop: "15px",
                      "&:hover": {
                        backgroundColor: "#1f406d",
                      },
                    }}
                    type="submit"
                  >
                    Save
                  </Button>
                </Grid>
              </form>
            </Card>
          </Modal>
        </>

        <Grid
          item
          xs={15}
          sm={10}
          md={10}
          lg={9.5}
          xl={16}
          sx={{ marginLeft: "50px" }}
        >
          {/* <DataGrid
            rows={currentUsers || []}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            // loading
            sx={{
              border: "2px solid #4472c4",
              "& .css-1iyq7zh-MuiDataGrid-columnHeaders": {
                backgroundColor: "#4472c4",
                color: "white",
                textAlign: "center",
              },
              "& .MuiDataGrid-root": {
                border: "2px solid #4472c4",
              },
            }}
          /> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
