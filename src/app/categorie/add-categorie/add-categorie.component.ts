import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit{

  // public id?:number;
  public nomCat?:string;

  constructor(private servCat : CategorieService,private router:Router){

  }
    ngOnInit(){
      // console.log(this.nomCat);
    }

  addCategorie(form:NgForm){
    //
      // console.log(this.nomCat);
      console.log(form.value['txtNomCat']);
      // on insère la catégorie dans le tableau de cat de service
        this.servCat.insertOne({idCat:0,nomCat:form.value['txtNomCat']});
      // On navigue vers la liste des catégories
        this.router.navigateByUrl('/categorie');

  }

}
