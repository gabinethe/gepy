import React from "react";
import "./style.css";
import UIButton from "../UI/Button";
import { User } from "lucide-react";
import Alunos from "../Alunos";

export default function MainForm() {
  return (
    <div className="main-form">
      <div className="icons-top">
        <UIButton component={`Alunos`} to={`/alunos`} className="button-alunos">
          
        </UIButton>
      </div>
      <div className="icons-down"></div>
    </div>
  );
}
