import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

interface User {
  userOrEmail: any;
  password: any;
}

const Login = () => {
  const [user, setUser] = useState<User>({
    userOrEmail: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: any): Promise<User> => {
    e.preventDefault();
    let data;
    try {
      const res = await fetch("http://localhost:3333/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200) {
        data = await res.json();
        console.log(data);
        navigate("/");
      } else {
        console.log("Usuario o contraseña invalida");
      }
    } catch (err) {
      console.log(err);
    }
    return data;
  };

  const handleChange = (e: any): void => {
    // preguntar esta linea, me dejo crazy
    setUser({ ...user, [e.target.name]: e.target.value });

    // name y value propiedades del input
    //value = lo que se esta tipeando
    //name = nombre del input
    // console.log(e.target.name, e.target.value);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            textAlign: "center",
            backgroundColor: "#1e272e",
            padding: "1.5rem",
          }}
        >
          <Typography variant="h5" color="white" sx={{ mt: 2 }}>
            Login
          </Typography>

          <CardContent>
            {/* Contenido de la tarjeta */}
            <form onSubmit={handleSubmit}>
              <TextField
                variant="filled"
                label="User or Email"
                sx={{ display: "block", margin: "0.5rem 5rem" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                name="userOrEmail"
                // Caputuramos lo que se va escribiendo
                onChange={handleChange}
              >
                {/* Estos son inputs */}
              </TextField>
              <TextField
                variant="filled"
                label="Password"
                sx={{ display: "block", margin: "0.5rem 5rem" }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                name="password"
                // Caputuramos lo que se va escribiendo
                type="password"
                onChange={handleChange}
              >
                {/* Estos son inputs */}
              </TextField>

              <Button
                sx={{ mt: 2 }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign in
              </Button>
              <Typography variant="subtitle1" color="white" sx={{ mt: 2 }}>
                you don't have any acount?
                <Link
                  style={{ textDecoration: "none", color: "#2196f3" }}
                  to="/signup"
                >
                  {" "}
                  Sign up here
                </Link>
              </Typography>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
