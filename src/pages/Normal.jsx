import { Jeu } from "../components/Jeu";
import { PaysContext } from "../context/PaysContext";
import { useContext, useState } from "react";
export const Normal = () => {
  const { pays, loading } = useContext(PaysContext);

   if (loading) return <p>Chargement ... </p>;

  return (
    <div className="bloc-jeu jeu-normal">
      <Jeu pays={pays} />
    </div>
  );
};
