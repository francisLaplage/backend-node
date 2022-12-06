import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CategorieService } from './categorie.service';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  constructor(private catSert:CategorieService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {

      if(this.catSert.isConnected)
          return true;
      else{

          this.router.navigateByUrl('/connexion');
          return false;
      }
  }
  
}
