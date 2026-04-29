import "../assets/styles/connexion.css";
import { useState } from "react";

export const Connexion = () => {
  const [form, setForm] = useState({
    pseudoEmail: "",
    mdp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="bloc-formulaire">
      <div className="img-container"></div>
      <div className="formulaire">
        <h2>SE CONNECTER</h2>
        <form action="">
          <div className="bloc-input">
            <label htmlFor="email">PSEUDO OU EMAIL</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={form.email}
            />
          </div>
          <div className="bloc-input">
            <label htmlFor="mdp">MOT DE PASSE</label>
            <input
              onChange={handleChange}
              type="password"
              name="mdp"
              value={form.mdp}
            />
          </div>

          <button type="button" className=" boutton btn-connect">
            SE CONNECTER
          </button>
        </form>
      </div>
    </div>
  );
};
