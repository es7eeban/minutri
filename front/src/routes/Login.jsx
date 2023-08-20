import React, { useState } from "react";
import Signin from "../components/Signin";

function Login() {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  return (
    <>
      <div>
        <h1 className="text-2xl font-extrabold ">Login</h1>
        <button onClick={() => setShowModal(true)}>
          <p>Entrar</p>
        </button>
      </div>
      <Signin onClose={handleOnClose} visible={showModal} />
    </>
  );
}

export default Login;
