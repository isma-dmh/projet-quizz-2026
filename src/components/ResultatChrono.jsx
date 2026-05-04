export const ResultatChrono = ({score, numeroQuestion }) => {
  return (
    <div>
      <p>Nombre de question répondu en 60 seconde: {numeroQuestion - 1}</p>
      <p>Nombre de bonne réponse en 60 seconde : {score}</p>
      <p>score : {score * 100}</p>
      <button onClick={() => window.location.reload()}>Recommencer ⟳</button>
    </div>
  );
};
