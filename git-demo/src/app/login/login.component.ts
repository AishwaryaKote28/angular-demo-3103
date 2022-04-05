import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }
  loginForm!: FormGroup;
  responsedata: any
  // isSubmitted  =  false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // if(this.authService.isLoggedIn()){
    //   this.router.navigate(['home'])
    // }

  }

  get formControls() { return this.loginForm.controls; }
  // onSubmit(){
  //   //console.log(this.loginForm.value);
  //   if(this.loginForm.valid){
  //     this.authService.login(this.loginForm.value).subscribe((res:any)=>{
  //        this.router.navigate(['home']) 

  //       },
  //       (err:Error)=>{
  //         alert(err.message)
  //       }
  //     );
  //   }

  // }
  //
  onSubmit() {
    //   //console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      this.authService.proceedLogin(this.loginForm.value).subscribe(res => {
        this.responsedata = res;
        console.log(res)
        console.log(this.responsedata.token)
        localStorage.setItem("token", this.responsedata.token);
        this.router.navigateByUrl('home')
      },
        err => {
          alert("Login Failed")
          this.loginForm.reset();
        }
      );

    }

  }

}


