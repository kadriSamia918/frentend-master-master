import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produitdetail',
  templateUrl: './produitdetail.component.html',
  styleUrls: ['./produitdetail.component.css']
})
export class ProduitdetailComponent implements OnInit {
 public produit;
  public prodId;
  public data;
  public selectedFile;
  public event1;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  constructor(private _produitSer:ApiService,private route : ActivatedRoute,private http : HttpClient) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.prodId=id;
  this._produitSer.getProduitById(this.prodId).subscribe(
    data => {
      this.produit= data ;
      console.log(data);
  },
    error => console.log(error) 

  );
  }
  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload =(event2) => {this.imgURL=reader.result;}

  }
 
  onUpload() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.prodId=id;
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  
  
    this.http.put('http://localhost:8080/products/image/1',uploadData)
    .subscribe(
                 res => {console.log(res);
                         this.receivedImageData = res;
                         this.base64Data = this.receivedImageData.pic;
                         this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
                 err => console.log('Error Occured duringng saving: ' + err)
              );
  
  
   }
  

}
