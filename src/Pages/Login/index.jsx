import React from "react";
import "./style.css";
import Logo from "../../Assets/Images/Logo.png";
import { Outlet } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="container-login">
      <div className="container-left">
        <img className="logo-login" src={Logo} />
      </div>

      <div className="container-right">
        <div className="form-login">
          <h1>Acesso ao sistema</h1>
          <label>Usuário: </label>
          <input placeholder="digite o usuário de droga" type="text"></input>

          <label>Senha: </label>
          <input placeholder="digite sua senha" type="password"></input>

          <button onSubmit={''}>Entrar</button>

          <a>Esqueceu a senha?</a>
          <a>Primeiro acesso</a>
        </div>
      </div>
    </div>
  );
}
