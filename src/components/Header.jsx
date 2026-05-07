import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isConnected } from "../assets/functions/connected";
import cross from "../assets/images/cross.svg";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setOpen(false), 0);
    return () => clearTimeout(timer);
  }, [location]);

  const navigate = useNavigate();

  const handleDeconnect = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="flex justify-between items-center ">
      <NavLink to={"/"}>
        <h2 className="logo">CFI-QUIZZ</h2>
      </NavLink>
      <nav id={open ? "open" : ""}>
        <button onClick={() => setOpen(!open)} type="button" id="burger">
          {open ? (
            <img src={cross} id="croix" />
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

          {isConnected() ? (
            <>
              <li>
                <NavLink className="boutton" to={"/mode"}>
                  MODE
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleDeconnect}
                  className="boutton btn-connect"
                >
                  SE DÉCONNECTER
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink className="boutton" to="/inscription">
                  S'INSCRIRE
                </NavLink>
              </li>
              <li>
                <NavLink to="/connexion" className=" boutton btn-connect">
                  SE CONNECTER
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
