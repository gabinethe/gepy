import React from "react";
import "./style.css";
import {
  Contact,
  LogOut,
  Newspaper,
  NotebookPen,
  User,
  Users,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="sidebar-style">
      <ul>
        <li>
          <button>
            <User />
          </button>
          Alunos
        </li>
        <li>
          <button>
            <Users />
          </button>
          Turmas
        </li>
        <li>
          <button>
            <Contact />
          </button>
          Funcionários
        </li>
        <li>
          <button>
            <Newspaper />
          </button>
          Newsletter
        </li>
        <li>
          <button>
            <NotebookPen />
          </button>
          Agenda
        </li>
        <li>
          <button>
            <LogOut />
          </button>
          LogOff
        </li>
      </ul>
    </div>
  );
}
