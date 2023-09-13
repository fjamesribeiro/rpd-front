import { useEffect, useState } from "react";
import PacienteList from "../paciente/PacienteList";
import Container from "../layout/Container";


function Pacientes() {
    const [paciente, setPaciente] = useState([]);

    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(url + "/paciente", {
            method: "GET",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => setPaciente(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div >
            <h1>Lista de Pacientes</h1>
            <Container customClass="start">
                <div>{paciente.length > 0 && paciente.map((paciente) => (
                    <PacienteList id={paciente.id} nome={paciente.user.nome} />
                ))
                }
                </div>
            </Container>
        </div>
    )
}

export default Pacientes;