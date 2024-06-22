import React from "react";
import logo from "../assets/StudyEasy.png"; // Asegúrate de que esta ruta sea correcta
import "../styles/Login.css";
import "boxicons/css/boxicons.min.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/django.api";

export const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const Navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await loginUser(data);

    if (response.message === "Login successful") {
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user)); // Guarda los datos del usuario en localStorage
      Navigate("/home");
    } else {
      setError("loginError", { message: response.message });
    }
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden bg-white">
      {/* Rectangles for the background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="lightblue absolute transform rectangle-lightblue-animation"></div>
        <div className="blue absolute transform rectangle-blue-animation"></div>
      </div>

      {/* Card for the login form */}
      <div className="absolute z-10 flex flex-col items-center p-8 bg-white cardlogin cardlogin-animation">
        {/* Contenido */}
        {/* Logo */}
        <img src={logo} alt="StudyEasy" className="logoform mb-4" />
        {/* Titulo */}
        <h1 className="text-6xl bluetext mb-8 kodchasan">¡Hola de nuevo!</h1>
        <br></br>
        {/* Formulario */}
        <div className="w-full mb-6 justify-center items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mb-4 justify-center items-center px-20">
              <label className="flex items-center border rounded-full p-2">
                <i className="bx bx-phone bx-sm text-gray-500 ml-2 mr-3"></i>
                <input
                  type="text"
                  placeholder="Teléfono"
                  className="flex-1 border-none outline-none h-8 w-9"
                  {...register("phone", { required: true })}
                  id="phone"
                />
              </label>
            </div>
            <br></br>
            <div className="w-full mb-6 justify-center items-center px-20">
              <label className="flex border rounded-full p-2">
                <i className="bx bx-lock-alt bx-sm text-gray-500 ml-2 mr-3"></i>
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="flex-1 border-none outline-none h-8 w-9"
                  {...register("password", { required: true })}
                  id="password"
                />
              </label>
            </div>
            <br></br>
            <button className="w-1/4 bluebg text-white rounded-xl py-3 mb-4 h-2/4 translate-x-56">
              ¡Vamos allá!
            </button>
          </form>
        </div>

        <br></br>
        <div className="flex justify-end w-full text-sm ">
          <a href="/forgot" className="hover:underline bluetext kodchasan">
            Lo olvidé...
          </a>
        </div>
        <br></br>
        <div className="flex justify-end w-full text-sm ">
          <a href="/home" className="hover:underline kodchasan">
            Solo vengo de paso
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 flex items-center space-x-2">
        <button className="bg-blue-300 text-white rounded-full px-4 py-2 flex items-center cardlogin-animation">
          <i className="fas fa-arrow-left mr-2"></i>
          No tengo cuenta
        </button>
      </div>
    </div>
  );
};
