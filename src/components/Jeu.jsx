import { Question } from "../classes/Question";
import { useState, useRef, useEffect } from "react";

const getRandom = (liste) => liste[Math.floor(Math.random() * liste.length)];

export const Jeu = ({
  pays,
  score,
  setScore,
  numeroQuestion,
  setNumeroQuestion,
  mode,
}) => {
  const paysUtilisee = useRef(null);
  const [paysActif, setPaysActif] = useState(
    () => new Question(getRandom(pays), pays),
  );

  useEffect(() => {
    paysUtilisee.current = [paysActif];
  }, []);

  const [reponseSelectionnee, setReponseSelectionnee] = useState(null);

  const handleClick = (c) => {
    setReponseSelectionnee(c);

    if (c == paysActif.bonneReponse) setScore(score + 1);

    setTimeout(() => {
      
      if (paysUtilisee.current.length === pays.length) {
        paysUtilisee.current = [];
      }

      const paysDisponibles = pays.filter(
        (p) => !paysUtilisee.current.some((q) => q.nom === p.name),
      );
      const nouveauPays = getRandom(paysDisponibles);
      const nouvelleQuestion = new Question(nouveauPays, pays);
      setPaysActif(nouvelleQuestion);
      paysUtilisee.current = [...paysUtilisee.current, nouvelleQuestion];
      setReponseSelectionnee(null);
      setNumeroQuestion((n) => n + 1);
    }, 1000);
  };

  return (
    <div className="jeu">
      <h2>MODE {mode.toUpperCase()}</h2>
      <img src={paysActif.flag} alt="" />
      <p className="question">
        QUESTION {numeroQuestion}: {paysActif.intitule.toUpperCase()}
      </p>
      <ul className="liste">
        {paysActif.choix.map((c, id) => (
          <button
            key={id}
            onClick={() => handleClick(c)}
            value={c}
            disabled={reponseSelectionnee}
          >
            <li
              style={{
                color:
                  reponseSelectionnee == c
                    ? c === paysActif.bonneReponse
                      ? "#c8ff24"
                      : "#ff3333"
                    : "",
                transform: reponseSelectionnee == c ? "scale(1.1)" : "",
              }}
            >
              {String(c).toUpperCase()}
            </li>
          </button>
        ))}
      </ul>
    </div>
  );
};
