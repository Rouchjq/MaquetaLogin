import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  interface User {
    user: string;
    name: string;
    lastname: string;
    email: string;
    password: string;
  }

  const [user, setUser] = useState<User>({
    user: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // bandera
  const [flag, setflag] = useState<boolean>();

  const handleSubmit = async (e: any): Promise<User> => {
    e.preventDefault();
    let data;
    try {
      const res = await fetch("http://localhost:3333/auth/signup", {
        method: "PUT",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      data = await res.json();
      console.log(data);
      console.log(res.status);
    } catch (err) {
      alert(err);
    }
    return data;
  };

  const handleChange = (e: any): void => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Card
          style={{
            textAlign: "center",
            padding: "1.5rem",
          }}
          sx={{ mt: 5 }}
        >
          <Typography variant="h5" sx={{ mt: 2 }}>
            Sign up
          </Typography>
          <CardContent>
            {/* FORMULARIO DE REGISTRO */}
            <form onSubmit={handleSubmit}>
              {/* USUARIO */}
              <TextField
                variant="filled"
                label="Usuario"
                sx={{ display: "block", margin: "0.5rem 2rem" }}
                // capturamos el contenido en tiempo real
                name="user"
                onChange={handleChange}
              ></TextField>
              {/* NOMBRE */}
              <TextField
                variant="filled"
                label="Nombre"
                sx={{ display: "block", margin: "0.5rem 2rem" }}
                // capturamos el contenido en tiempo real
                name="name"
                onChange={handleChange}
              ></TextField>
              {/* APELLIDO */}
              <TextField
                variant="filled"
                label="Apellido"
                sx={{ display: "block", margin: "0.5rem 2rem" }}
                // capturamos el contenido en tiempo real
                name="lastname"
                onChange={handleChange}
              ></TextField>
              {/* CORREO */}
              <TextField
                variant="filled"
                label="Email"
                sx={{ display: "block", margin: "0.5rem 2rem" }}
                // capturamos el contenido en tiempo real
                name="email"
                onChange={handleChange}
              ></TextField>
              {/* CONTRASEÑA */}
              <TextField
                variant="filled"
                label="Password"
                sx={{ display: "block", margin: "0.5rem 2rem" }}
                // capturamos el contenido en tiempo real
                name="password"
                type="password"
                onChange={handleChange}
              ></TextField>

              {/* BOTON PARA ENVIAR FORMULARIO */}
              <Button
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Create My Account
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Register;
