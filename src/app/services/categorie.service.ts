import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  listeDesCategories: any[] = [];
  private url='http://localhost:3000/api/v1';
//     [
//     { idCat: 1, nomCat: "Ordinateur" },
//     { idCat: 2, nomCat: "Voiture" },
//     { idCat: 3, nomCat: "DVD" },
//     { idCat: 4, nomCat: "Livre" },
//     { idCat: 5, nomCat: "Fruits" }
// ];
//
isConnected:boolean = true;
  constructor(private httpClient : HttpClient) {
      /*1-  Onsouhaite utilser le module httpClient d'angular pour 
            intérroger ou interfacer notre frontend à notre API REST back
              - Importer le module HttpClientModule
              - Obtenir un objet de ce type par injection de dépendance
              - exploiter les différentes méthodes(GET,POSt,PUT et DELETE) 
              de cet objet 
            */
    /**
     * 2- problème ce connexion lié aux cors == header
     *  - installer les cors côté back
     *  - importation du module cors dans le projet
     *  - Création d'un middleware de configuration des header
     *     (Autorisations)
     * 
     */

   }
  /**
   * @returns 
   */
  findAll() {
    //return this.httpClient.get(`http://localhost:3000/api/v1/categories`); 
    // return this.httpClient.get(this.url+"/categorie");

    return this.httpClient.get(`${this.url}/categories`); 
  }
  /**
   * @param idCat 
   */
   findOneById(id: number) {
     return this.httpClient.get(`${this.url}/categories/${id}`); 
  }
  /**
   * 
   * @param cat 
   */
  insertOne(cat: any) {
    // let existe: boolean = true;
    // if (!!cat) {
    //   for (let elt of this.findAll()) {
    //     if (elt.nomCat == cat.nomCat) {
    //       existe = true;
    //       break;
    //     }
    //   }
    //   //test de existe
    //   if (!existe) {
    //     cat = {
    //       idCat: this.getIncrementMaxId(),
    //       nomCat: cat.nomCat
    //     }
    //      this.listeDesCategories.push(cat);
    //   }
    // } else {
    //   console.log('Ce mon de catégorie existe déjà dans la base');
    // }
  }
  /**
   * 
   * @param cat 
   */
  deleteOne(cat: any) {
    return this.httpClient.delete(`${this.url}/categories/${cat.idCat}`); 
  }
  /**
   * 
   * @param cat 
   */
  updateOne(cat: any) {
    return this.httpClient.put(`${this.url}/categories/${cat.idCat}`,{nom:cat.nomCat});
  }
  /**
   * 
   * @returns 
   */
  getIncrementMaxId() {
    // return this.listeDesCategories[this.listeDesCategories.length - 1].idCat + 1;
  }
/**
 * 
 * @param mot 
 * @returns 
 */
  rechercherCategorieParMotCle(mot:string) {
    // return this.listeDesCategories.filter(etl => etl.nomCat.indexOf(mot) != -1); // indexof , include et contains
    // return this.listeDesCategories.filter(etl => etl.nomCat.toLowerCase().includes(mot) );
  }

}
