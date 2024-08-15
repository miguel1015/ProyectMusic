import React, { useState } from "react";
import { toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useRouter } from "next/router";
import { AppBar, ListItemIcon, CircularProgress, Grid } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import axios from "axios";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Drawer from "@mui/material/Drawer";
import HeadsetIcon from "@mui/icons-material/Headset";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useTheme } from "@emotion/react";

function Navbar() {
  /**
   *UseRouter
   */
  const router = useRouter();

  /*
  Menu
  */
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  const theme = useTheme();
  const [openOut, setOpenOut] = useState(false);
  const handleDrawerOpen = () => {
    setOpenOut(true);
  };
  const handleDrawerClose = () => {
    setOpenOut(false);
  };

  /*
  Obtener foto de perfil
  */
  const [picture, setPicture] = useState<string | null>(null);

  const getImage = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9000/api/users/GetAll"
      );
      const authenticatedUser = localStorage.getItem("authenticatedUser");
      const user = response.data.find(
        (user: { name: string; profileImage: string }) =>
          user.name === authenticatedUser
      );

      if (user && user.profileImage) {
        setPicture("data:image/png;base64," + user.profileImage);
      }
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
    }
  };

  React.useEffect(() => {
    getImage();
  }, []);

  const [anchorMessage, setAnchorMessage] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenMessages = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMessage(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setAnchorMessage(null);
  };

  const handleRouterPush = (route: string) => {
    handleDrawerClose();
    router.push(route);
  };

  const menuItems = [
    {
      text: "HOME",
      icon: <HomeIcon sx={{ color: "steelblue" }} />,
      onClick: () => handleRouterPush("/General/Home/Index"),
    },
    {
      text: "Listen",
      icon: <HeadsetIcon sx={{ color: "steelblue" }} />,
      onClick: () => handleRouterPush("/General/ListenMusic/Index"),
    },
    {
      text: "About",
      icon: <InfoIcon sx={{ color: "steelblue" }} />,
      onClick: () => handleRouterPush("/General/About/Index"),
    },
    {
      text: "PRICE",
      icon: <PriceChangeIcon sx={{ color: "steelblue" }} />,
      onClick: () => handleRouterPush("/General/Price/Index"),
    },
  ];

  /*
  Rutas
  */
  const buttonProfile = () => {
    router.push("/General/Profile/Index");
  };
  const buttonMore = () => {
    router.push("/General/More/Index");
  };
  const buttonSettings = () => {
    router.push("/General/Settings/Index");
  };
  const buttonLogout = () => {
    localStorage.removeItem("token");
    toast.warning("¡Saliste de sesión!");
    router.push("/");
  };

  return (
    <Grid style={{ padding: "50px" }}>
      <AppBar
        sx={{
          width: "99%",
          marginRight: "8px",
          marginTop: "10px",
        }}
        position="fixed"
      >
        <Grid container>
          <Toolbar
            sx={{
              width: "100%",
            }}
          >
            <Grid
              item
              xs={2}
              sm={1}
              md={1}
              lg={1}
              xl={1}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  mr: 2,
                  ...(openOut && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Drawer
              sx={{
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: 240,
                  boxSizing: "border-box",
                },
              }}
              variant="persistent"
              anchor="left"
              open={openOut}
            >
              <DrawerHeader>
                <Tooltip title="cerrar">
                  <IconButton onClick={handleDrawerClose}>
                    {theme === "ltr" ? (
                      <ChevronRightIcon />
                    ) : (
                      <ChevronLeftIcon />
                    )}
                  </IconButton>
                </Tooltip>
              </DrawerHeader>
              <List>
                {menuItems.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemButton>
                      {item.icon}
                      <ListItemIcon>
                        <Button onClick={item.onClick}>{item.text}</Button>
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
            {/* /////////////////////////////////// */}
            <Grid item xs={6} sm={7.5} md={8} lg={8.5}>
              <LibraryMusicIcon />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                MusicMike
              </Typography>
            </Grid>

            <Box sx={{ flexGrow: 0.1 }}>
              <Tooltip title="Messages">
                <IconButton onClick={handleOpenMessages} sx={{ p: 0 }}>
                  <Badge badgeContent={1} color="error">
                    <EmailIcon
                      sx={{ width: "40px", height: "40px", color: "white" }}
                    />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Menu
                MenuListProps={{
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0, 84, 194, 0.32))",
                    mt: 2,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                id="menu-appBar"
                anchorEl={anchorMessage}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorMessage)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <Avatar /> Stamper le ha enviado un mensaje.
                </MenuItem>
                <MenuItem>
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={7} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <p>Notifications</p>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {picture ? (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Rely Sharp"
                      src={picture}
                      sx={{ width: 70, height: 70 }}
                    />
                  </IconButton>
                </Tooltip>
              ) : (
                <CircularProgress sx={{ color: "white" }} />
              )}
              <Menu
                MenuListProps={{
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0, 84, 194, 0.32))",
                    mt: 2,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                id="menu-appBar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={buttonProfile}>
                  <Avatar /> Perfil
                </MenuItem>
                <MenuItem onClick={buttonMore}>
                  <ListItemIcon>
                    <AddCircleOutlineIcon fontSize="small" />
                  </ListItemIcon>
                  Más
                </MenuItem>
                <MenuItem onClick={buttonSettings}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Ajustes
                </MenuItem>
                <MenuItem onClick={buttonLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Salida
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Grid>
      </AppBar>
    </Grid>
  );
}

export default Navbar;
