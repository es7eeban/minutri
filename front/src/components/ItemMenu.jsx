import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemMenu = (props) => {
  return (
    <>
      <Link
        to={`/` + props.ruta}
        className="flex flex-col items-center capitalize align-middle mb-7 text-textSidebar g-2 "
      >
        <FontAwesomeIcon icon={props.icon} className="h-10 " />
        <span className="text-2xl font-bold ">{props.name}</span>
      </Link>
    </>
  );
};

export default ItemMenu;
