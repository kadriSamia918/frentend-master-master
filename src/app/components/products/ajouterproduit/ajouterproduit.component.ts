import { Component, OnInit } from '@angular/core';
import { Iproduit } from 'src/app/models/produit';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api';

@Component({
  selector: 'app-ajouterproduit',
  templateUrl: './ajouterproduit.component.html',
  styleUrls: ['./ajouterproduit.component.css']
})
export class AjouterproduitComponent implements OnInit {


  addProduitForm: FormGroup;

  constructor(private fb: FormBuilder,private http:HttpClient, 
    private router: Router, private _vendeurSer:ApiService) {

    let formControls = {
      name: new FormControl('', [
        Validators.required,
        //removed validators to make things work.
        // Check your validators name should not have validator.
        
      ]),
      price: new FormControl('', [
        Validators.required,
   

      ]),
      description: new FormControl('', [
        Validators.required,

      ]),
      // don't put createdAt spring adds creation data automatically. (this is backend job)

    }

    this.addProduitForm= fb.group(formControls);
  }

  get name() { return this.addProduitForm.get('name'); }
  get price() { return this.addProduitForm.get('price'); }
  get description() { return this.addProduitForm.get('description'); }

  ngOnInit(): void {
  }

  venteDirect() {
    console.log(this.addProduitForm.value);
    let produit = new Iproduit();
    produit.name = this.addProduitForm.value.name;
    produit.price = this.addProduitForm.value.price;
    produit.description = this.addProduitForm.value.description;
    
    this._vendeurSer. registerProduit(produit).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['/listproduit']);
      }
      ,
      error => console.log(error)
    )
  }
  

}

