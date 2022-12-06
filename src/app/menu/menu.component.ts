import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorieService } from '../services/categorie.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  constructor(private catServ:CategorieService){
  }

}
