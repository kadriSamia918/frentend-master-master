import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private auth:AuthService,private router:Router) {
    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ])
    }

    this.loginForm = fb.group(formControls);
  }

  get email(){return this.loginForm.get('email');}
  get password(){return this.loginForm.get('password');}


  ngOnInit(): void {
  }

  login(loginForm){
    console.log(this.loginForm.value);
    this.auth.login(loginForm.email,loginForm.password)
    if(this.auth.isAuth){
    this.router.navigateByUrl('/');
    }
    
  }

}
