import { Card } from "../components/Card";
import "../assets/styles/home.css";
import { Link } from "react-router-dom";
import normal from "../assets/images/normal.png";
import chrono from "../assets/images/chrono.png";
import entrainement from "../assets/images/entrainement.png";
import { isConnected } from "../assets/functions/connected";

const legend = {
  normal: "RÉPONDEZ AUX QESTIONS A VOTRE RYTHME ET PROGRSSEZ SEREINEMENT !",
  chrono:
    "RÉPONDEZ LE PLUS VITE POSSIBLE ET TENTEZ DE BATTRE LE MEILLEUR TEMPS!",
  entrainement: "ENTRAINEZ-VOUS, APPRENEZ ET AMÉLIOREZ VOS CONNAISSANCES !",
};

export const Home = () => {
  return (
    <div id="home" className="flex flex-col gap-9">
      <h1 className="title">DÉCOUVREZ NOS QUIZ DÉMOGRAPHIQUE</h1>
      <div id="cards-accueil" className="flex justify-around gap-5">
        <Card nom={"normal"} source={normal} legend={legend.normal} />
        <Card nom={"chrono"} source={chrono} legend={legend.chrono} />
        <Card
          nom={"entrainement"}
          source={entrainement}
          legend={legend.entrainement}
        />
      </div>
      {!isConnected() && (
        <div id="buttons-home" className="flex justify-evenly">
          <Link to={"/inscription"} className="boutton">
            S'INSCRIRE
          </Link>
          <Link to={"/connexion"} className=" boutton btn-connect">
            SE CONNECTER
          </Link>
        </div>
      )}
    </div>
  );
};
