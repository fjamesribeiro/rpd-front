import { Link } from "react-router-dom";
import Container from "./Container";

import styles from "./Navbar.module.css";
import logo from "../../img/costs_logo.png";

function Navbar() {
    return (
        <div className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/cadPaciente">Cadastro de Paciente</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/rpd">Cadastro de RPD</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/pacientes">Lista de Pacientes</Link>
                    </li>
                </ul>
            </Container>
        </div>
    );
}

export default Navbar;