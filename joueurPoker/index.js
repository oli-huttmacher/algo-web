
// Classe Joueur
class Joueur {
    constructor(pseudo, image, info) {
      this.pseudo = pseudo;
      this.image = image;
      this.info = info;
    }
  }
  
//table de poker=====================================================
class Room {
    constructor(nom, date, joueurs) {
      this.nom = nom;
      this.date = date;
      this.joueurs = [];
    }
    afficherNamEtDate() {
      console.log(`La room ${this.nom} date : ${this.date}`);
    }
  
    ajouterJoueur(joueur) {
      this.joueurs.push(joueur);
    }
    afficherJoueurs() {
      console.log(`Les joueurs de la room ${this.nom} sont :`);
      this.joueurs.forEach((joueur) => console.log(joueur.nom));
    }
  }
  

//la date dans l'input date de la room=============================================
document.getElementById("text-date").addEventListener("input", function (e) {
  let input = e.target;
  let value = input.value.replace(/\D/g, ""); // Supprime tous les caractères non numériques
  let formattedValue = "";

  if (value.length > 2) {
    formattedValue += value.substr(0, 2) + "/";
    if (value.length > 4) {
      formattedValue += value.substr(2, 2) + "/";
      formattedValue += value.substr(4, 4);
    } else {
      formattedValue += value.substr(2);
    }
  } else {
    formattedValue = value;
  }

  input.value = formattedValue;

    //sauvegarde la date en localstorage=============================================
  localStorage.setItem("text-date", input.value);
  localStorage.setItem("text-room", input.value);
});

  // Stocker la valeur de l'input text-room dans localStorage lors de la saisie
  document.getElementById("text-room").addEventListener("input", function (e) {
    localStorage.setItem("text-room", e.target.value);
  });
  
  // Récupérer la valeur depuis localStorage lors du chargement de la page
  document.addEventListener("DOMContentLoaded", function () {
    const storedRoom = localStorage.getItem("text-room");
    if (storedRoom) {
      document.getElementById("text-room").value = storedRoom;
    }
  });
//button de creation de la room===================================================
document
  .getElementById("btn-create-room")
  .addEventListener("click", function (e) {
    const roomName = document.getElementById("text-room").value;
    const roomDate = document.getElementById("text-date").value;

    const room = new Room(roomName, roomDate); // instance de la class Room
    console.log(room);
    localStorage.setItem("room", JSON.stringify(room));


    if (roomName && roomDate) { //si les deux champs sont remplis==================================
      const roomContent = `
                <h3>Table de Poker: ${roomName}</h3>
                <p>Date: ${roomDate}</p>
            `;
      document.getElementById("room-content").innerHTML = roomContent;
     
      document.getElementById("text-room").value = "";  //vide les champs après la création de la room
      document.getElementById("text-date").value = "";  //vide les champs après la création de la room       
    } else {
      alert("Veuillez remplir tous les champs.");
    }
    e.preventDefault();
  });


//joueurPoker=======================================================
class JoueurPoker {
    constructor(pseudo, img) {
      this.nom = nom;
      this.img = img;
    }
    afficherNom() {
      console.log(`${this.nom}`);
    }
  }
// Liste des joueurs inscrits========================================
const joueursInscrits = [];


// Fonction pour inscrire un joueur==================================
function inscrireJoueur(pseudo, img) {
    const joueur = new JoueurPoker(pseudo, img);
    joueursInscrits.push(joueur);
    return joueur;
  }
