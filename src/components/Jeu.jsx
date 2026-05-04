import { Question } from "../classes/Question";
import { useState, useRef, useEffect } from "react";

const getRandom = (liste) => liste[Math.floor(Math.random() * liste.length)];

export const Jeu = ({ pays }) => {
  const paysUtilisee = useRef(null);
  const [paysActif, setPaysActif] = useState(() => new Question(getRandom(pays), pays));

  useEffect(() => {
    paysUtilisee.current = [paysActif];
  }, []);

  const [reponseSelectionnee, setReponseSelectionnee] = useState(null);

  const handleClick = (e) => {
    setReponseSelectionnee(e.target.value);
    setTimeout(() => {
      const paysDisponibles = pays.filter(
        (p) => !paysUtilisee.current.some(q => q.nom === p.name),
      );
      const nouveauPays = getRandom(paysDisponibles);
      const nouvelleQuestion = new Question(nouveauPays,pays);
      setPaysActif(nouvelleQuestion);
      paysUtilisee.current = [...paysUtilisee.current, nouvelleQuestion];
      setReponseSelectionnee(null);
    }, 1000);
  };

  return (
    <div className="jeu">
      <h2>MODE NORMAL</h2>
      <img src={paysActif.flag} alt="" width={"200px"} />
      <p>{paysActif.intitule}</p>
      <ul>
        {paysActif.choix.map((c, id) => (
          <li key={id}>
            <button
              onClick={handleClick}
              value={c}
              style={{
                color:
                  reponseSelectionnee === c
                    ? c === paysActif.bonneReponse
                      ? "green"
                      : "red"
                    : "",
              }}
              disabled={reponseSelectionnee}
            >
              {c}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
