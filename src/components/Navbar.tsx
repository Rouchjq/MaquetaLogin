import React from "react";
import {
  Button,
  Box,
  AppBar,
  Container,
  Typography,
  Toolbar,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      {" "}
      {/*sustituye al div*/}
      <AppBar position="static" color="transparent">
        {/* esuna barra de menu */}
        <Container>
          {" "}
          {/*para centrar */}
          <Toolbar>
            {" "}
            {/* herramientas para navbar */}
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
              }}
            >
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                EMPRESA
              </Link>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
