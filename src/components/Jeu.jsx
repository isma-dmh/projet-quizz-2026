import { Question } from "../classes/Question";
import { useState } from "react";

export const Jeu = ({ pays }) => {
  const [paysUtilisee, setPaysUtilisee] = useState([]);
  const [paysActif, setPaysActif] = useState(
    () => new Question(pays[Math.floor(Math.random() * pays.length)], pays),
  );

  return (
    <div className="jeu">
      <h2>MODE NORMAL</h2>
      <img src={paysActif.flag} alt="" width={"200px"} />
      <p>{paysActif.intitule}</p>
      <ul>
        {paysActif.choix.map((c,id)=>  <li key={id} >{c}</li> )}
      </ul>
    </div>
  );
};
