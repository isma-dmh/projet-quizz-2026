import { useContext } from "react";
import { PaysContext } from "../context/PaysContext";

export const Normal = () => {
  const pays = useContext(PaysContext);

  console.log(pays);

  return (
    <div className="jeu" id="normal">
      <h2>MODE NORMAL</h2>
      <img src="" alt="flag" />
    </div>
  );
};
