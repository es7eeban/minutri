import React from "react";
import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div id="sidebar" className="w-40 bg-slate-600">
        <div className="flex ">
          <h1>MiNutri</h1>
          <nav>
            <ul>
              <li>
                <Link to={`/inicio`}>Inicio</Link>
              </li>
              <li>
                <Link to={`/contact`}>Contact</Link>
              </li>
              <li>
                <a href={`/`}>Salir</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
