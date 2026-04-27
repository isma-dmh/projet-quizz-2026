import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex justify-between items-center ">
      <h2 className="logo">CFI-QUIZZ</h2>
      <nav>
        <ul className="flex gap-4">
          <li  >
            <NavLink to="/">ACCUEIL</NavLink>
          </li>
          <li>
            <NavLink to="/">S'INSCRIRE</NavLink>
          </li>
          <li>
            <NavLink to="/" id="btn-connect">
              SE CONNECTER
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
