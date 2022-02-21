import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Comptador from "./pages/Comptador";
import Acordeo from "./pages/Acordeo";
import Carrusel from "./pages/Carrusel";
import GraellaFotos from "./pages/GraellaFotos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="comptador" element={<Comptador />} />
          <Route path="acordeo" element={<Acordeo />} />
          <Route path="carrusel" element={<Carrusel />} />
          <Route path="graellaFotos" element={<GraellaFotos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
