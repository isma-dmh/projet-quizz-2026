import "../assets/styles/inscription.css";
import { useState } from "react";

export const Inscription = () => {
  const [form, setForm] = useState({
    nom: "",
    pseudo: "",
    email: "",
    mdp: "",
    mdp2: "",
    check: false,
  });

  const [touched, setTouched] = useState({
    nom: false,
    pseudo: false,
    email: false,
    mdp: false,
    mdp2: false,
    check: false,
  });

  const isValid = () => {
    return (
      form.nom > 0 &&
      form.pseudo > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
      /\d/.test(form.mdp) &&
      form.mdp2 === form.mdp &&
      form.check
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    type !== "checkbox"
      ? setForm({ ...form, [name]: value })
      : setForm({ ...form, check: checked });
  };

  const handleTouched = (e) => {
    const { name } = e.target;

    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = () => {
    setTouched({
      nom: true,
      pseudo: true,
      email: true,
      mdp: true,
      mdp2: true,
      check: true,
    });

    if(!isValid) return;
      

  };

  return (
    <div className="bloc-formulaire">
      <img src="" alt="" className="img-formulaire" />
      <div className="formulaire">
        <h2>S'INSCRIRE</h2>
        <form action="">
          <label htmlFor="nom">NOM</label>
          <input
            onChange={handleChange}
            onBlur={handleTouched}
            type="text"
            name="nom"
            value={form.nom}
          />
          <label htmlFor="pseudo">PSEUDO</label>
          <input
            onChange={handleChange}
            onBlur={handleTouched}
            type="text"
            name="pseudo"
            value={form.pseudo}
          />
          <label htmlFor="email">EMAIL</label>
          <input
            onChange={handleChange}
            onBlur={handleTouched}
            type="email"
            name="email"
            value={form.email}
          />
          <label htmlFor="mdp">MOT DE PASSE</label>
          <input
            onChange={handleChange}
            onBlur={handleTouched}
            type="password"
            name="mdp"
            value={form.mdp}
          />
          <label htmlFor="mdp2">CONFIRMER MOT DE PASSE</label>
          <input
            onChange={handleChange}
            onBlur={handleTouched}
            type="password"
            name="mdp2"
            value={form.mdp2}
          />
          <label htmlFor="check">J'ACCEPTE LES CONDITIONS D'UTILISATIONS</label>
          <input
            onChange={handleChange}
            onBlur={handleTouched}
            type="checkbox"
            name="check"
            value={form.check}
          />

          {touched.nom && form.nom.length === 0 && (
            <p>Veuillez introduire votre nom ! </p>
          )}
          {touched.pseudo && form.pseudo.length === 0 && (
            <p>Veuillez introduire votre pseudo ! </p>
          )}
          {touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) && (
            <p>Veuillez introduire une adresse email valide ! </p>
          )}
          {touched.mdp && !/\d/.test(form.mdp) && (
            <p>Le mot de passe doit contenir au moins un chiffre !</p>
          )}
          {touched.mdp && form.mdp.length < 8 && (
            <p>Le mot de passe doit contenir au moins 8 caracteres </p>
          )}
          {touched.mdp2 && form.mdp2 !== form.mdp && (
            <p>Les mots de passe doivent etre identique </p>
          )}

          {touched.check && !form.check && (
            <p>Veuillez accepter les conditions d'utilisation </p>
          )}

          <button onClick={handleSubmit} type="button" className="boutton">
            S'INSCRIRE
          </button>
        </form>
      </div>
    </div>
  );
};
