import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-delete-categorie',
  templateUrl: './delete-categorie.component.html',
  styleUrls: ['./delete-categorie.component.css']
})
export class DeleteCategorieComponent implements OnInit{
  id? : number;

  constructor(private cateService : CategorieService,private route : ActivatedRoute, private router : Router){
  }

  ngOnInit(): void {
    // Récupération du paramètre dans l'url de la route active
    this.id = this.route.snapshot.params['id'];

    if(!!this.id){

      // On fait appel à la méthode de suppression ecrite dans le service CategorieService
        if(confirm('Voulez vraiment supprimer cette catégorie ?')){
          this.cateService.deleteOne({ idCat: this.id, nomCat: '' })
            .subscribe((resultat) => {
                this.router.navigateByUrl('/categorie');
            })    
        }else{
             this.router.navigateByUrl('/categorie');
        }
      
    }
  }

}
