import { Pays } from "./Pays";

export class Question extends Pays {
  static TYPES = [
    { id: "nom", question: "Quel est le nom de ce pays ?" },
    { id: "alpha", question: "Quel est le code alpha 3 de ce pays ?" },
    { id: "capital", question: "Quel est la capital de ce pays ?" },
    { id: "continent", question: "Dans quel continent se trouve ce pays ?" },
    {
      id: "population",
      question: "Quel est la densité de population de ce pays ?",
    },
    { id: "borders", question: "Quels sont les pays limitrophe de ce pays ?" },
  ];

  constructor(pays, tousLesPays) {
    super(pays);
    this.type = Question.TYPES[Math.floor(Math.random() * Question.TYPES.length)];
    this.choix = this.#genererChoix(tousLesPays);
  }

  get intitule() {
    return this.type.question;
  }

  get bonneReponse() {
    return this[this.type.id];
  }

  #genererChoix(tousLesPays) {
    const mauvaisChoix = tousLesPays
      .filter((p) => p.nom !== this.nom)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((p) => p[this.type.id]);

    return [...mauvaisChoix, this.bonneReponse].sort(() => Math.random() - 0.5);
  }

  verifier(reponse) {
    return reponse === this.bonneReponse;
  }
}
