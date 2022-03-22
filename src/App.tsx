import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
function App() {
  return (
    //indicarle al navegador que usaremos la URL
    <BrowserRouter>
      {/* la lista de rutas que usaremos*/}
      <Navbar />
      <Container>
        <Routes>
          {/*la ruta que usaremos para mostar el componente o la vista*/}
          <Route path="/" element={<Home />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/signup/" element={<Register />} />
          <Route path="/profile/" element={<Profile />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
