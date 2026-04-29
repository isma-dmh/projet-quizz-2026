import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center ">
      <NavLink to={"/"}>
        <h2 className="logo">CFI-QUIZZ</h2>
      </NavLink>
      <nav id={open ? "open" : ""}>
        <button
          onClick={() => setOpen(!open)}
          type="button"
        >
          {open ? (
            <img src="./src/assets/images/cross.svg" id="croix" />
          ) : (
            <>
              <div className="barre"></div>
              <div className="barre centre"></div>
              <div className="barre"></div>
            </>
          )}
        </button>
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
