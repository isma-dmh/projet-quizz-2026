import { Pays } from "./Pays";

export class Question extends Pays {
  static TYPES = [
    { id: "nom", jsonId: "name", question: "Quel est le nom de ce pays ?" },
    {
      id: "alpha",
      jsonId: "alpha_3_code",
      question: "Quel est le code alpha 3 de ce pays ?",
    },
    {
      id: "capital",
      jsonId: "capital",
      question: "Quelle est la capitale de ce pays ?",
    },
    {
      id: "continent",
      jsonId: "region",
      question: "Dans quel continent se trouve ce pays ?",
    },
    {
      id: "population",
      jsonId: "population",
      question: "Quelle est la densité de population de ce pays ?",
    },
    {
      id: "borders",
      jsonId: "borders",
      question: "Quels sont les pays limitrophes de ce pays ?",
    },
  ];

  constructor(pays, tousLesPays) {
    super(pays);
    this.type =
      Question.TYPES[Math.floor(Math.random() * Question.TYPES.length)];
    this.choix = this.#genererChoix(tousLesPays);
  }

  get intitule() {
    return this.type.question;
  }

  get bonneReponse() {
    return this[this.type.id];
  }

  #genererChoix(tousLesPays) {
    const autresPays = tousLesPays
      .filter((p) => p.nom !== this.nom)
      .sort(() => Math.random() - 0.5);

    const mauvaisChoix = [];

    for (const p of autresPays) {
      const valeur = p[this.type.jsonId];
      if (valeur !== this.bonneReponse && !mauvaisChoix.includes(valeur)) {
        mauvaisChoix.push(valeur);
      }
      if (mauvaisChoix.length === 3) break;
    }

    return [...mauvaisChoix, this.bonneReponse].sort(() => Math.random() - 0.5);
  }

  verifier(reponse) {
    return reponse === this.bonneReponse;
  }
}
