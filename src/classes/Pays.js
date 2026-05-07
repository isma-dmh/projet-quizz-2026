export class Pays {
  constructor(pays) {
    this.nom = pays.name;
    this.alpha = pays.alpha_3_code;
    this.capital = pays.capital;
    this.continent = pays.region;
    this.population = pays.population.toLocaleString('fr-FR');
    this.flag = pays.flag;
    this.borders = pays.borders;
  }

}
