import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular, Par, l'exemple,";

  info = {
    nom: "Simpson",
    email: "simpson@yahoo.fr",
    tel: "0123456789",
    adresse: "rue de picpus 112, 75012 paris",
    age: 15,
    date: new Date(),
    prix : 10.123456789
  }
  valeurPropriete = "yellow";
  show: boolean = true;
  connecte: boolean = true;
  
  colorTwoWayBinding = "yellow";

  listeClasses = "btn btn-success";

  bonjour = "bonjour à tous, Bienvenue dans cette formation";

  // personnes: string[] = ["Bart", "Lisa", "Omer"];
  personnes: any[] = [{ nom: "Simpson", prenom: "Bart", age: 15 },
                      { nom: "Durand", prenom: "Albert", age: 15 },
                       { nom: "Jean", prenom: "Paul", age: 15 }
                      ];

  constructor() {
      setTimeout(()=> {
        this.show = false;
        this.connecte = false;

        this.listeClasses = "btn-yellow";
      }, 6000);
  }
  
  ChangerStatus() {
    this.show = !this.show;
  }

  changerCouleur(input:HTMLInputElement){
   //console.log(input.value);
    //this.valeurPropriete = input.value;

    let txt = <HTMLInputElement>document.getElementById('txtColor');

    console.log(txt.value);
    this.valeurPropriete = txt.value;
  }

  styleFonction() {
    return {
      background: 'green',
      color: 'white',
      border :'1px solid black'
    }
  }
}
