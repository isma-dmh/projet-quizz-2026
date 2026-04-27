export const Header = () => {
  return (
    <header className="flex justify-between items-center " >
        <h1 className="logo">CFI-QUIZZ</h1>
        <nav>
            <ul className="flex gap-4" >
                <li><a href="">ACCUEIL</a></li>
                <li><a href="">S'INSCRIRE</a></li>
                <li><a href="" id="btn-connect" >SE CONNECTER</a></li>
            </ul>
        </nav>
    </header>
  )
}
