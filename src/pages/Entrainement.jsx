import { Jeu } from "../components/Jeu";
import { PaysContext } from "../context/PaysContext";
import { useContext, useState } from "react";
import "../assets/styles/jeux.css";

export const Entrainement = () => {
   const { pays, loading } = useContext(PaysContext);
  const [score, setScore] = useState(0);
  const [numeroQuestion, setNumeroQuestion] = useState(1);

  if (loading) return <p>Chargement ... </p>;

  return (
    <div className="bloc-jeu jeu-entrainement">
      <p className="score" >{score}</p>
      <Jeu
        pays={pays}
        score={score}
        setScore={setScore}
        numeroQuestion={numeroQuestion}
        setNumeroQuestion={setNumeroQuestion}
        mode={"entrainement"}
      />
    </div>
  );
}
