import "../assets/styles/connexion.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Connexion = () => {
  const [form, setForm] = useState({
    pseudoEmail: "",
    mdp: "",
  });

  const [check, setCheck] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "http://localhost/back-quizz/connexion.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      const data = await response.json();

      data.success ? navigate("/") : setCheck(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bloc-formulaire connexion ">
      <div className="img-container"></div>
      <div className="formulaire">
        <h2>SE CONNECTER</h2>
        <form action="">
          <div className="bloc-input">
            <label htmlFor="email">PSEUDO OU EMAIL</label>
            <input
              onChange={handleChange}
              type="text"
              name="pseudoEmail"
              value={form.pseudoEmail}
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

          {check && <p>Pseudo ou mot de passe incorrect </p>}

          <button
            onClick={handleSubmit}
            type="button"
            className=" boutton btn-connect"
          >
            SE CONNECTER
          </button>
        </form>
      </div>
    </div>
  );
};
