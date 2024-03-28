class Batiment {
    constructor(adresse, prix, superficie) {
      this.adresse = adresse;
      this.prix = prix;
      this.superficie = superficie;
    }
  
    
    getAdresse() {
      return this.adresse;
    }
  
    getPrix() {
      return this.prix;
    }
  
    getSuperficie() {
      return this.superficie;
    }
  
    
    setAdresse(adresse) {
      this.adresse = adresse;
    }
  
    setPrix(prix) {
      this.prix = prix;
    }
  
    setSuperficie(superficie) {
      this.superficie = superficie;
    }
  
    
    affichage() {
      console.log(  `Adresse: ${this.adresse}, Prix: ${this.prix}, Superficie: ${this.superficie}`);
    }
  }
  
  class Maison extends Batiment {
    constructor(adresse, prix, superficie, nbEtages) {
      super(adresse, prix, superficie);
      this.nbEtages = nbEtages;
    }
  
    
    getNbEtages() {
      return this.nbEtages;
    }
  
    setNbEtages(nbEtages) {
      this.nbEtages = nbEtages;
    }
    affichage() {
        console.log(  `Adresse: ${this.adresse}, Prix: ${this.prix}, Superficie: ${this.superficie},nbEtages: ${this.nbEtages}`);
      }
  }
   
  
  class Appartement extends Batiment {
    constructor(adresse, prix, superficie, numeroEtage, nbChambres) {
      super(adresse, prix, superficie);
      this.numeroEtage = numeroEtage;
      this.nbChambres = nbChambres;
    }
  
    
    getNumeroEtage() {
      return this.numeroEtage;
    }
  
    setNumeroEtage(numeroEtage) {
      this.numeroEtage = numeroEtage;
    }
  
    getNbChambres() {
      return this.nbChambres;
    }
  
    setNbChambres(nbChambres) {
      this.nbChambres = nbChambres;
    }
    affichage() {
        console.log(  `Adresse: ${this.adresse}, Prix: ${this.prix}, Superficie: ${this.superficie},numeroEtage: ${this.numeroEtage},nbChambres: ${this.nbChambres}`);
      }
    
  }
  
  
 var maison1 = new Maison("123 Rue de la Maison", 250000, 200, 2);
var appartement1 = new Appartement("456 Rue de l'Appartement", 150000, 100, 3, 2);
  
  maison1.affichage();
  appartement1.affichage();