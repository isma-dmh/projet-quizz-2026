import { useEffect, useState } from "react";

export const Resultat = ({ score, numeroQuestion, mode }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [error, setError] = useState(false);

  useEffect(() => {
    if (score * 100 <= user[`score_${mode}`]) return;

    const fetchRecord = async () => {
      const userFetch = { pseudo: user.pseudo, [`score_${mode}`]: score * 100 };

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/record.php`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userFetch),
          },
        );

        const data = await response.json();

        if (data.success) {
          const updateUser = { ...user, [`score_${mode}`]: score * 100 };
          localStorage.setItem("user", JSON.stringify(updateUser));
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchRecord();
  }, []);

  return (
    <div className={`bloc-jeu jeu-${mode} resultat`}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>RÉSULTAT</h2>
      <p>
        Bonne réponse ✅: <span className="resultat-score">{score}</span>
      </p>
      <p>
        Question répondu 💬: <span>{numeroQuestion - 1}</span>
      </p>
      <p>
        Score 🎯: <span>{score * 100}</span>
      </p>

      <p>
        {" "}
        Meilleur score 🏆:{" "}
        <span className="resultat-score">
          {user[`score_${mode}`] ? user[`score_${mode}`] : score * 100}
        </span>
      </p>

      <button onClick={() => window.location.reload()}>Recommencer ⟳</button>
    </div>
  );
};
