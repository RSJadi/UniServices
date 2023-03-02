import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Button } from "../Button";

import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className="menu">
        <Link to="servicos">Serviços</Link>
        <Link to="fornecedores">Fornecedores</Link>
      </div>

      {/* <h1 className="equipe">Equipe</h1>
            <h1 className="service">Serviços</h1>
            <h1 className="fornece">Fornecedores</h1> */}
      <Link to="login">
        <Button text="Login" />
      </Link>
    </div>
  );
};
