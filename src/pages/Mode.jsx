import "../assets/styles/mode.css";
import { Card } from "../components/Card";
import normal from "../assets/images/normal.png";
import chrono from "../assets/images/chrono.png";
import entrainement from "../assets/images/entrainement.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Mode = () => {
  const [user, setUser] = useState(
    localStorage.pseudo ? localStorage.pseudo.toUpperCase() : "JOUEUR",
  );

  return (
    <div id="mode" className="flex flex-col gap-9">
      <h2 className="title">BIENVENUE {user}</h2>
      <h3>CHOISIS TON MODE DE JEU</h3>
      <div id="cards-mode" className="flex justify-around gap-5">
        <Link to={"/mode"}>
          <Card nom={"normal"} source={normal} legend={"NORMAL"} />
        </Link>
        <Link to={"/mode"}>
          <Card nom={"chrono"} source={chrono} legend={"CHRONO"} />
        </Link>
        <Link to={"/mode"}>
          <Card
            nom={"entrainement"}
            source={entrainement}
            legend={"ENTRAINEMENT"}
          />
        </Link>
      </div>
    </div>
  );
};
