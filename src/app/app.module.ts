import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CategorieComponent } from './categorie/categorie.component';
import { MenuComponent } from './menu/menu.component';
// Import pour gérer le fanacais
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { SupVirgulePipe } from './mesPipes/sup-virgules';
import { FrancisCasePipe } from './mesPipes/francis-case';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes,RouterModule } from '@angular/router';
import { SingleCategorieComponent } from './categorie/single-categorie/single-categorie.component';
import { ErreurComponent } from './erreur/erreur.component';
import { DeleteCategorieComponent } from './categorie/delete-categorie/delete-categorie.component';
import { UpdateCategorieComponent } from './categorie/update-categorie/update-categorie.component';
import { AddCategorieComponent } from './categorie/add-categorie/add-categorie.component';
import { AuthentificationGuard } from './services/authentification.guard';
import { ConnexionComponent } from './connexion/connexion.component';

// import { CategorieService } from './services/categorie.service';
  registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
  {path:'categorie', component:CategorieComponent,canActivate:[AuthentificationGuard]},   //   localhost:4200/categorie
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'categorie/:id', component: SingleCategorieComponent },//localhost:4200/categorie/(valeur)
  { path: 'not-found', component:ErreurComponent },
  {path: 'delete/:id',component:DeleteCategorieComponent,canActivate:[AuthentificationGuard]},
  {path:'update/:id',component:UpdateCategorieComponent,canActivate:[AuthentificationGuard]},
  {path:'add',component:AddCategorieComponent,canActivate:[AuthentificationGuard]},
  {path:'connexion',component:ConnexionComponent},
  // { path :'categorie/:jean/:francis', component:SingleCategorieComponent },
  // { path: '', component: MenuComponent },
  { path: '**', redirectTo :'/not-found'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    MenuComponent,
    SupVirgulePipe,
    FrancisCasePipe,
    AboutComponent,
    ContactComponent,
    SingleCategorieComponent,
    ErreurComponent,
    DeleteCategorieComponent,
    UpdateCategorieComponent,
    AddCategorieComponent,
    ConnexionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthentificationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
