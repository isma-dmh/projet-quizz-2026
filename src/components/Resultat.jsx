export const Resultat = ({score, numeroQuestion }) => {
  return (
    <div>
      <p>Nombre de question répondu: {numeroQuestion - 1}</p>
      <p>Nombre de bonne réponse: {score}</p>
      <p>score : {score * 100}</p>
      <button onClick={() => window.location.reload()}>Recommencer</button>
    </div>
  );
};
