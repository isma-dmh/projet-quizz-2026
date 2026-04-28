import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex justify-between items-center ">
      <NavLink to={"/"} >
        <h2 className="logo">CFI-QUIZZ</h2>
      </NavLink>
      <nav>
        <ul className="flex gap-4">
          <li>
            <NavLink className="boutton" to="/">
              ACCUEIL
            </NavLink>
          </li>
          <li>
            <NavLink className="boutton" to="/">
              S'INSCRIRE
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className=" boutton btn-connect">
              SE CONNECTER
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
