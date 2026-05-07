export const Resultat = ({score, numeroQuestion, mode}) => {
   
   return <div className={`bloc-jeu jeu-${mode} resultat`} >
      <h2>RÉSULTAT</h2>
      <p>Bonne réponse ✅: <span id="resultat-score" >{score}</span></p>
      <p>Question répondu 💬: <span>{numeroQuestion - 1}</span></p>
      <p>Score 🎯: <span>{score * 100}</span></p>
      <button onClick={() => window.location.reload()}>Recommencer ⟳</button>
    </div>
}
