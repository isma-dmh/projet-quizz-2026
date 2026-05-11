import { useEffect, useState } from "react";
import "../assets/styles/scores.css";

export const Scores = () => {
  const [mode, setMode] = useState("normal");
  const [tab, setTab] = useState([]);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/scores.php`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(mode),
          },
        );

        const data = await response.json();

        setTab(data.tableau);
      } catch (error) {
        console.log(error);
      }
    };

    fetchScore();
  }, [mode]);

  const getColor = (id) => {
    if (id === 0) return "#FFD700";
    if (id === 1) return "#C0C0C0";
    if (id === 2) return "#d09357";
  };

  return (
    <div id="bloc-scores" className={`bg-${mode}`}>
      <h2>TABLEAU DES SCORES</h2>
      <div className="bloc-bouttons">
        <button
          onClick={() => setMode("normal")}
          className={`switch ${mode === "normal" ? "active" : ""}`}
        >
          MODE NORMAL
        </button>
        <button
          onClick={() => setMode("chrono")}
          className={`switch ${mode === "chrono" ? "active" : ""}`}
        >
          MODE CHRONO
        </button>
      </div>
      <div id="bloc-tableau">
        <div id="legend">
          <h3>#</h3>
          <h3 id="pseudo">PSEUDO</h3>
          <h3 id="score">SCORE</h3>
        </div>
        <div id="bloc-value">
          {tab.map((value, id) => {
            return (
              value[`score_${mode}`] && (
                <div className="value" key={id} style={{ color: getColor(id) }}>
                  <p id="id-value">{id + 1}</p>
                  <p id="pseudo-value">{value.pseudo.toUpperCase()}</p>
                  <p id="score-value">{value[`score_${mode}`]}</p>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};
