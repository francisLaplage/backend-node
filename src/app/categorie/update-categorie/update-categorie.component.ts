import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {
  id? : number;
  nomCat?:string;

  categorie: any;

  constructor(private cateService : CategorieService,private route : ActivatedRoute, private router : Router){
  }

  ngOnInit(): void {
    // Récupération du paramètre dans l'url de la route active
    this.id = this.route.snapshot.params['id'];

    console.log(this.id);
    if(!!this.id){
       this.cateService.findOneById(this.id)
         .subscribe((categorie: any) => {
           console.log(categorie);
        this.id = categorie[0].id;
        this.nomCat =categorie[0].nom
        })

    }
  }
  addCategorie( ){//form:NgForm){
    
    console.log("idCat : " + this.id + " nomCtat : " + this.nomCat);
    
    this.cateService.updateOne({ idCat: this.id, nomCat: this.nomCat })
      .subscribe((resultat) => {
        this.router.navigateByUrl('/categorie');
        })

  }
  addCategorie2(form:NgForm){

    this.cateService
      .updateOne({ idCat: form.value['txtId'], nomCat: form.value['txtNomCat'] })
      .subscribe((resultat) => {
        console.log(resultat + "Obj cat dans resultat");
        this.router.navigateByUrl('/categorie');
      });
  }
}
