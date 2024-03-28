var msg=(n)=>
{
console.log("Bonjour "+n+ ",Je suis une fonction anonyme");
};
msg("Développeur");





class Etudiant {
    constructor(cne ,nom,prenom,niveau){
    this.cne=cne
    this.nom = nom;
    this.prenom = prenom;
    this.niveau=niveau;
 }
    getcne(){
     return this.cne
 }

     getnom(){
      return this.nom
 }
    getprenom(){
      return this.prenom
 }
    getniveau(){
       return this.niveau
 }
    setnom(){
        return this.nom=n
    }
    setprenom(){
        return this.prenom=n
    }
    setcne(){
        return this.cne=cne
    }
    setniveau(){
        return this.niveau=niveau
    }
    affichage() {
    console.log(this.nom + " " + this.prenom+ " " +this.cne+ " " +this.niveau ) ; }
    equal(other) {
        return this.cne === other.cne;
    }

    }
    var ab=new Etudiant("EE333","yahya","zaizi","bac+1")
    var b=new Etudiant("EE332","mohemde","zaizi","bac+1")
    ab.affichage()
    b.affichage();
    console.log("Les étudiants ont le même CNE :", ab.equal(b));
    class Proprietaire {
        constructor(nom, prenom, age, cin) {
            this.nom = nom;
            this.prenom = prenom;
            this.age = age;
            this.cin = cin;
        }

        getNom() {
            return this.nom;
        }
    
        getPrenom() {
            return this.prenom;
        }
    
        getAge() {
            return this.age;
        }
    
        getCIN() {
            return this.cin;
        }
    
        
        setNom(nom) {
            this.nom = nom;
        }
    
        setPrenom(prenom) {
            this.prenom = prenom;
        }
    
        setAge(age) {
            this.age = age;
        }
    
        setCIN(cin) {
            this.cin = cin;
        }
    
        
        affichage() {
            console.log(`Propriétaire : ${this.nom} ${this.prenom}, Age : ${this.age}, CIN : ${this.cin}`);
        }
    
        
        equal(other) {
            return this.cin === other.getCIN();
        }
    }
    
    class Maison {
        constructor(adresse, nbEtages, nbChambres) {
            this.adresse = adresse;
            this.nbEtages = nbEtages;
            this.nbChambres = nbChambres;
        }
    
        
        getAdresse() {
            return this.adresse;
        }
    
        getNbEtages() {
            return this.nbEtages;
        }
    
        getNbChambres() {
            return this.nbChambres;
        }
    
        
        setAdresse(adresse) {
            this.adresse = adresse;
        }
    
        setNbEtages(nbEtages) {
            this.nbEtages = nbEtages;
        }
    
        setNbChambres(nbChambres) {
            this.nbChambres = nbChambres;
        }
    
        
        affichage() {
            console.log(`Maison située à l'adresse : ${this.adresse}, Nombre d'étages : ${this.nbEtages}, Nombre de chambres : ${this.nbChambres}`);
        }
    }
    
    
    let proprietaire1 = new Proprietaire("Dupont", "Jean", 40, "1234567890");
    let proprietaire2 = new Proprietaire("Durand", "Marie", 35, "0987654321");
    
    let maison1 = new Maison("1 rue de la Paix", 2, 4);
    let maison2 = new Maison("5 avenue des Champs-Élysées", 3, 6);
    
    
    proprietaire1.affichage();
    proprietaire2.affichage();
    
    
    maison1.affichage();
    maison2.affichage();
    
    
    console.log("Les propriétaires ont le même CIN :", proprietaire1.equal(proprietaire2));



