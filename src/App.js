import { Route, BrowserRouter, Routes } from "react-router-dom";
import CadPaciente from "./components/pages/CadPaciente";
import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Rpd from "./components/pages/Rpd";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cadPaciente" element={<CadPaciente />} />
          <Route path="/rpd" element={<Rpd />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
