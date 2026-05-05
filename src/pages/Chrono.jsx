import { Jeu } from "../components/Jeu";
import { PaysContext } from "../context/PaysContext";
import { useContext, useEffect, useState } from "react";
import { ResultatChrono } from "../components/ResultatChrono";

export const Chrono = () => {
  const { pays, loading } = useContext(PaysContext);
  const [score, setScore] = useState(0);
  const [numeroQuestion, setNumeroQuestion] = useState(1);
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (loading || time <= 0) return;

    const newTime = setInterval(() => setTime((t) => t - 1), 1000);

    return () => clearInterval(newTime);
  }, [loading, time]);

  if (loading) return <p>Chargement ... </p>;

  if (time === 0)
    return <ResultatChrono score={score} numeroQuestion={numeroQuestion} />;

  return (
    <div className="bloc-jeu jeu-chrono">
      <p className="score">{score}</p>
      <p className="score time" style={{ color: time <= 10 ? "#ff3333" : "" }}>
        {time}
      </p>
      <Jeu
        pays={pays}
        score={score}
        setScore={setScore}
        numeroQuestion={numeroQuestion}
        setNumeroQuestion={setNumeroQuestion}
        mode={"chrono"}
      />
    </div>
  );
};
