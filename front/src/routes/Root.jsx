import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.svg";
import ItemMenu from "../components/ItemMenu";
import {
  faFolderOpen,
  faGear,
  faHome,
  faRightFromBracket,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Root = () => {
  const fecha = new Date();
  return (
    <div className="flex flex-row min-h-screen ">
      <div className="fixed top-0 z-10 flex items-center justify-between w-full h-20 align-middle border-b-4 border-solid bg-bgWhite border-b-textSidebar">
        <img src={logo} alt="iconologo" className="flex justify-end h-20" />
        <span className="pr-5 text-2xl font-semibold">Nayara Silva</span>
        <span className="pr-5 text-lg font-semibold">
          {fecha.toLocaleDateString()}
        </span>
      </div>
      <div id="sidebar" className="w-40 p-3 bg-bgSidebar">
        <div className="flex flex-col items-center justify-between h-full ">
          <div>
            <nav className="flex flex-col items-center gap-4 align-middle justify-evenly ">
              <ul>
                <li>
                  <ItemMenu ruta="inicio" name="Home" icon={faHome} />
                </li>
                <li>
                  <ItemMenu ruta="user" name="User" icon={faUser} />
                </li>
                <li>
                  <ItemMenu ruta="patients" name="Patients" icon={faUsers} />
                </li>
                <li>
                  <ItemMenu ruta="tools" name="tools" icon={faGear} />
                </li>
                <li>
                  <ItemMenu
                    ruta="documents"
                    name="documents"
                    icon={faFolderOpen}
                  ></ItemMenu>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <ItemMenu ruta="" name="Salir" icon={faRightFromBracket} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div id="detail" className="mt-20 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
