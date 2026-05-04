import { Jeu } from "../components/Jeu";
import { PaysContext } from "../context/PaysContext";
import { useContext, useState } from "react";
import { ResultatNormal } from "../components/ResultatNormal";
import "../assets/styles/jeux.css"

export const Normal = () => {
  const { pays, loading } = useContext(PaysContext);
  const [score, setScore] = useState(0);
  const [numeroQuestion, setNumeroQuestion] = useState(1);

  if (loading) return <p>Chargement ... </p>;

  if (numeroQuestion > 10) return <ResultatNormal score={score} numeroQuestion={numeroQuestion} />;

  return (
    <div className="bloc-jeu jeu-normal">
      <p className="score" >{score}</p>
      <Jeu
        pays={pays}
        score={score}
        setScore={setScore}
        numeroQuestion={numeroQuestion}
        setNumeroQuestion={setNumeroQuestion}
        mode={"normal"}
      />
    </div>
  );
};
