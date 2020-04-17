import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ListproduitComponent } from './components/products/listproduit/listproduit.component';
import { ProduitdetailComponent } from './components/products/produitdetail/produitdetail.component';
import { AjouterproduitComponent } from './components/products/ajouterproduit/ajouterproduit.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { UpdateProduitComponent } from './components/products/update-produit/update-produit.component';
import { VenteEnchereComponent } from './components/detail-enchere/vente-enchere/vente-enchere.component';
import { DetailEnchereComponent } from './components/detail-enchere/detail-enchere/detail-enchere.component';
import { AjoutEnchereComponent } from './components/detail-enchere/ajout-enchere/ajout-enchere.component';
import { ClientComponent } from './components/client/client.component';



const routes: Routes = [
 
  {
    path:'',
    component:HomeComponent
  },
  {
    path : 'login',
    component:LoginComponent
  },  
  {
    path : 'register',
    component:RegisterComponent
  },
  {
    path : 'client',
    component:ClientComponent
  },
  {
    path : 'user',
    component:UserComponent
  },
  {
    path : 'listproduit',
    component:ListproduitComponent
  },
  {
    path : 'produitdetails/:id',
    component : ProduitdetailComponent
  },
  {
    path : 'ajouterProduit',
    component : AjouterproduitComponent
  },
  {
    path : 'cart',
    component :CartComponent
  },
 
  {
    path : 'ajoutEnchere',
    component : AjoutEnchereComponent
  },
  {
    path : 'enchere',
    component : VenteEnchereComponent
  },
  {
    path : 'detail-enchere/:id',
    component : DetailEnchereComponent
  },
  {
    path : 'updateProduit/:id',
    component : UpdateProduitComponent
  },
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
