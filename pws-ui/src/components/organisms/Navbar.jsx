import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../../store/authStore/useAuthStore.js";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const {
    signOut,
    setNotification,
    user,
    getProfile,
    init,
    isLoading,
    setIsLoading,
  } = useAuthStore();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await getProfile();
      setIsLoading(false);
    };
    fetchData();
  }, []);

  let pages;

  if (isLoading === false && !user) {
    pages = ["contact"];
  } else if (!isLoading  && user) {
    pages = ["contact", "favourites"];
  }

  // console.log(isLoading, user);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    navigate(`/${page}`);
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (action) => {
    setAnchorElUser(null);

    if (action === "profile") {
      navigate("/profile");
    } else if (action === "logout") {
      handleLogout();
    }
  };

  const handleLogout = async () => {
    const response = await signOut();
    if (response) {
      setNotification(true, response.message, response.status);
    } else {
      setNotification(true, "Logout successful!", "success");
    }
    navigate("/");
  };

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "black" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ThunderstormIcon
              fontSize="large"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              to="/"
            >
              HOME
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages &&
                  pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={() => handleCloseNavMenu(page)}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
            <ThunderstormIcon
              fontSize="large"
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              component={Link}
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
              to="/"
            >
              HOME
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages &&
                pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => handleCloseNavMenu(page)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
            </Box>

            <>
              {!isLoading && !user && (
                <>
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                  <Button
                    sx={{ my: 2, color: "white", display: "block" }}
                    onClick={() => navigate("/signup")}
                  >
                    Signup
                  </Button>
                </>
              )}
              {!isLoading && user && (
                <>
                  <Box sx={{ flexGrow: 0 }} id="avatar">
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar-user"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={() => handleCloseUserMenu()}
                    >
                      <MenuItem onClick={() => handleCloseUserMenu("profile")}>
                        <Typography textAlign="center">Profile</Typography>
                      </MenuItem>
                      <MenuItem onClick={() => handleCloseUserMenu("logout")}>
                        <Typography textAlign="center" id="logout">
                          Logout
                        </Typography>
                      </MenuItem>
                    </Menu>
                  </Box>
                </>
              )}
            </>
            {/* {!isLoading && !user ? (
              <>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button
                  sx={{ my: 2, color: "white", display: "block" }}
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </Button>
              </>
            ) : !isLoading && user ? (
              <>
                <Box sx={{ flexGrow: 0 }} id="avatar">
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar-user"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={() => handleCloseUserMenu()}
                  >
                    <MenuItem onClick={() => handleCloseUserMenu("profile")}>
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => handleCloseUserMenu("logout")}>
                      <Typography textAlign="center" id="logout">
                        Logout
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              </>
            ) : null} */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
