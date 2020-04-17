import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { ListproduitComponent } from './components/products/listproduit/listproduit.component';
import { ProduitdetailComponent } from './components/products/produitdetail/produitdetail.component';
import { AjouterproduitComponent } from './components/products/ajouterproduit/ajouterproduit.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/footer/footer.component';

import { UpdateProduitComponent } from './components/products/update-produit/update-produit.component';
import { VenteEnchereComponent } from './components/detail-enchere/vente-enchere/vente-enchere.component';
import { DetailEnchereComponent } from './components/detail-enchere/detail-enchere/detail-enchere.component';
import { AjoutEnchereComponent } from './components/detail-enchere/ajout-enchere/ajout-enchere.component';
import { ClientComponent } from './components/client/client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    ListproduitComponent,
    ProduitdetailComponent,
    AjouterproduitComponent,
    CartComponent,
    UserComponent,
    FooterComponent,

    UpdateProduitComponent,
    VenteEnchereComponent,
    DetailEnchereComponent,
    AjoutEnchereComponent,
    ClientComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
