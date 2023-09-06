import { useState } from "react";
import Input from "../form/Input";
import styles from "./Home.module.css";
import SubmitButton from "../form/SubmitButton";

function CadPaciente() {
  const [paciente, setPaciente] = useState([]);

  function handleChange(e) {
    setPaciente({ ...paciente, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    console.log(paciente);
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL;

    fetch(url + "/paciente", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(paciente),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={onSubmit} className={styles.home_container}>
      <Input
        name="email"
        text="Digite o email do paciente"
        placeHolder="Digite o email do paciente"
        type="text"
        handleOnChange={handleChange}
      />
      <Input
        name="psicologoId"
        text="Digite o Código do psicólogo"
        placeHolder="Digite o email do paciente"
        type="number"
        handleOnChange={handleChange}
        value={paciente.psicologoId}
      />
      <SubmitButton text="Cadastrar" />
    </form>
  );
}

export default CadPaciente;
