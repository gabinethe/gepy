import React from "react";
import "./style.css";
import { Contact, Newspaper, NotebookPen, User, Users } from "lucide-react";

export default function MainForm() {
  return (
    <div className="main-form">
      <div className="icons-top">
        <div className="button-pattern">
          <button className="button-home">
            <User className="button-icon-home" />
          </button>
          Alunos
        </div>
        <div className="button-pattern">
          <button className="button-home">
            <Users className="button-icon-home" />
          </button>
          Turmas
        </div>
        <div className="button-pattern">
          <button className="button-home">
            <Contact className="button-icon-home" />
          </button>
          Funcionários
        </div>
      </div>
      <div className="icons-down">
        <div className="button-pattern">
          <button className="button-home">
            <NotebookPen className="button-icon-home" />
          </button>
          Agenda
        </div>
        <div className="button-pattern">
          <button className="button-home">
            <Newspaper className="button-icon-home" />
          </button>
          Newsletter
        </div>
      </div>
    </div>
  );
}
