import React from "react";
import logo from "../assets/StudyEasy.png"; // Asegúrate de que esta ruta sea correcta
import "../styles/Forgot.css"; // Asegúrate de importar los estilos
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { sendPasswordEmail } from "../api/django.api";

export function ForgotE({ phone, defaultEmail }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: defaultEmail },
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await sendPasswordEmail({ phone, email: data.email });
      if (response.status === 200) {
        alert("Correo enviado exitosamente");
        navigate("/forgotC");
      } else {
        alert("Error enviando el correo");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error enviando el correo");
    }
  };

  return (
    <div className="forgot-container h-screen w-full top-24 kodchasan">
      <div className="flex justify-start">
        <div className="flex-col pl-10">
          <a href="/login" className="forgot-link whitespace-nowrap">
            &lt; ¡Ya lo recuerdo!
          </a>
        </div>
        <div className="flex-col spacex">
          <img src={logo} alt="StudyEasy" className="forgot-logo" />
        </div>
      </div>

      <div className="forgot-main pt-32">
        <div className="forgot-circle translate-y-12"></div>
        <div className="forgot-circle-bottom"></div>
        <div className="items-center align-middle flex flex-col pt-20">
          <h1 className="forgot-title">¡No te preocupes, a todos nos pasa!</h1>
          <p className="forgot-subtitle">
            Ingresa el correo electronico en donde recibiras la contraseña.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="forgot-input-container">
              <i className="bx bx-envelope"></i>
              <input
                type="text"
                placeholder="Correo electronico"
                className="forgot-input"
                {...register("email", { required: true })}
              />
              {errors.email && <p>El correo electrónico es obligatorio</p>}
            </div>
            <button className="forgot-button">Confirmar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
