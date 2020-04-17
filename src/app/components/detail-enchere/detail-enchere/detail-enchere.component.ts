import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api';

@Component({
  selector: 'app-detail-enchere',
  templateUrl: './detail-enchere.component.html',
  styleUrls: ['./detail-enchere.component.css']
})
export class DetailEnchereComponent implements OnInit {

  public produit;
  public prodId;
  public data;
  constructor(private US:ApiService ,private route : ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.prodId=id;
  this.US.getProduitByIdEnchere(this.prodId).subscribe(
    data => {
      this.produit= data ;
      console.log(data);
  },
    error => console.log(error) 

  );
  }

}
