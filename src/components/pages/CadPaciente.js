import Input from "../form/Input";

function CadPaciente() {
    return (
        <Input
            name="email"
            text="Digite o email do paciente"
            placeHolder="Digite o email do paciente"
            type="text"
        />
    )
}

export default CadPaciente;