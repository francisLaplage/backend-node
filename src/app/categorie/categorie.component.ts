import { Component,Input,OnInit } from '@angular/core';
import { CategorieService } from '../services/categorie.service';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

    
  listeCategorie: any = [];
  
  constructor(private catServ : CategorieService) {
  }

  ngOnInit(): void {
    this.catServ.findAll().subscribe((resultat) => {
      console.log(resultat);
      this.listeCategorie = resultat;
   });
  }
}
