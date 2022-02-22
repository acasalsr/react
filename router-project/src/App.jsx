import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Comptador from "./pages/Comptador";
import Acordeo from "./pages/Acordeo";
import Carrusel from "./pages/Carrusel";
import GraellaFotos from "./pages/GraellaFotos";
import TresEnRatlla from "./pages/TresEnRatlla";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="comptador" element={<Comptador />} />
          <Route path="acordeo" element={<Acordeo />} />
          <Route path="carrusel" element={<Carrusel />} />
          <Route path="graella-fotos" element={<GraellaFotos />} />
          <Route path="tres-en-ratlla" element={<TresEnRatlla />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
