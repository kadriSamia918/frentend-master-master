import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users = [];

  constructor(private adminSer:ApiService) { }

  ngOnInit(): void {
    this.adminSer.getAllUser().subscribe(data => {this.users =data;
      console.log(data);
  },
  error => {console.log(error)}
    )

}
onDelete(user) {
  let indice = this.users.indexOf(user);
  this.users.splice(indice, 1);
  let _id = user.id;
  this.adminSer.deleteUser(_id).subscribe(
    result=>{console.log(result);
      
    },
    error=>{
      return console.log(error);
    }
  )
}
updateState(_id){
  this.adminSer.updateUserState({userId:_id}).subscribe(
    result=>{
      console.log(result);
      this.ngOnInit();
    },
    error=>console.log(error)      
  )
}

}