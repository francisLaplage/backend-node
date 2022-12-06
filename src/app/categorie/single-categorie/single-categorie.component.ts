import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-single-categorie',
  templateUrl: './single-categorie.component.html',
  styleUrls: ['./single-categorie.component.css']
})
export class SingleCategorieComponent implements OnInit{
  idCat?: number;
  nomCat?: String;
  constructor(private serviceCategorie:CategorieService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let idCat: number = <number>this.route.snapshot.params['id'];

    if (!!idCat) {
      this.serviceCategorie.findOneById(idCat).subscribe((resultat:any) => {
        console.log(resultat);
        this.idCat = resultat[0].id;
        this.nomCat = resultat[0].nom;
        })
      }
  }
}
