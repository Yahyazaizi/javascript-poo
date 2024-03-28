
class Produit {
    constructor(reference,prix, quantite) {
      this.reference = reference;
      this.quantite = quantite;
      this.prix=prix;
    }
  
    
    getReference() {
      return this.reference;
    }
  
    getQuantite() {
      return this.quantite;
    }
    getprix() {
        return this.prix;
      }
  
    
    setReference(n) {
      this.reference = n;
    }
  
    setQuantite(n) {
      this.quantite = n;
    }
    setprix(n) {
        this.prix = n;
      }
    
    
    afficher() {
        console.log(`reference: ${this.reference} quantite ${this.quantite}, prix : ${this.prix}`);
    }
  }
  
  
  class Medicament extends Produit {
    constructor(reference, quantite,prix,nom, molecule) {
      super(reference, quantite,prix);
      this.molecule = molecule;
      this.nom = nom;
    }
  
    
    getMolecule() {
      return this.molecule;
    }
  
    
    setMolecule(newMolecule) {
      this.molecule = newMolecule;
    }
    getnom() {
        return this.nom;
      }
    
      
      setnom(n) {
        this.nom = n;
      }
      afficher() {
        console.log(`reference: ${this.reference} quantite ${this.quantite}, prix : ${this.prix},"nom :${this.nom},"molecule:${this.molecule}`);
    }
      
  }
  
  
  
  class ParaPharm extends Produit {
    constructor(reference, quantite,prix, type) {
      super(reference, quantite,prix);
      this.type = type;
    }
  
    
    getType() {
      return this.type;
    }
  
    
    setType(n) {
      this.type = n;
  }
  afficher() {
    console.log(`reference: ${this.reference} quantite ${this.quantite}, prix : ${this.prix},"type :${this.type}`);
}
  
  }
var produitmedicament = new Medicament(123,400,400+'MD', 'xx', 'x6');
var produitparapharm = new ParaPharm(123,400,400+'MD', 'er');



produitmedicament.afficher();
produitparapharm.afficher();