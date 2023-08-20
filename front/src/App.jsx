import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="bg-[url('./assets/background-inicio.svg')] bg-cover h-screen w-full">
      <div className="flex flex-col items-center justify-center h-screen lg:mr-96 sm:mr-0">
        <img src={logo} alt="" className="min-w-full " />

        <a
          href={`/login`}
          className="flex justify-center w-40 p-3 mr-20 font-bold text-white bg-purple-600 rounded-full"
        >
          Login
        </a>

        <p className="p-2 mx-24 text-lg font-bold">
          MiNutri es un software de Nutrición chileno dedicado al profesional
          Nutricionista, a docentes del área y a estudiantes de nutrición con el
          fin de optimizar los tiempos de la consulta nutricional, desarrollo de
          casos clínicos, revisión de cálculos, entre múltiples funciones más!
        </p>
      </div>
    </div>
  );
}

export default App;
