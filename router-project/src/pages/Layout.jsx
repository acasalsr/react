import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>Exercici React, Andreu Casals </header>
      <div class="HolyGrail-body">
        <main class="HolyGrail-content">
          <Outlet />
        </main>
        <nav class="HolyGrail-nav">
          Nav
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/comptador">Comptador</Link>
            </li>
            <li>
              <Link to="/acordeo">Acordeo</Link>
            </li>
            <li>
              <Link to="/carrusel">Carrusel</Link>
            </li>
            <li>
              <Link to="/graella-fotos">Graella fotos</Link>
            </li>
            <li>
              <Link to="/tres-en-ratlla">Tres en Ratlla</Link>
            </li>
          </ul>
        </nav>
        <aside class="HolyGrail-ads">ads</aside>
      </div>
      <footer>This is the footer</footer>
    </>
  );
}
