import { CardAccueil } from "../components/CardAccueil";
import "../assets/styles/home.css";

const legend = {
  normal: 
    "RÉPONDEZ AUX QESTIONS A VOTRE RYTHME ET PROGRSSEZ SEREINEMENT !",
  chrono:
    "RÉPONDEZ LE PLUS VITE POSSIBLE ET TENTEZ DE BATTRE LE MEILLEUR TEMPS!",
  entrainement:
    "ENTRAINEZ-VOUS, APPRENEZ ET AMÉLIOREZ VOS CONNAISSANCES !",
};

export const Home = () => {
  return (
    <div id="home" className="flex flex-col gap-9" >
      <h1 className="title">DÉCOUVREZ NOS QUIZ DÉMOGRAPHIQUE</h1>
      <div id="cards-accueil" className="flex justify-around gap-5" >
        <CardAccueil source={"normal"} legend={legend.normal}/>
        <CardAccueil source={"chrono"} legend={legend.chrono}/>
        <CardAccueil source={"entrainement"} legend={legend.entrainement}/>
      </div>
      <div id="buttons-home" className="flex justify-evenly" >
        <a href="" className="boutton" >S'INSCRIRE</a>
        <a href="" className=" boutton btn-connect" >SE CONNECTER</a>
      </div>
    </div>
  );
};
