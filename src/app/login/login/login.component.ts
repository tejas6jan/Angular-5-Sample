import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  title = "login";
  constructor(private formbuilder: FormBuilder, private loginservice: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.loginservice.loginUser(this.loginForm.value).subscribe((resp: any) => {

        console.log(this.loginservice.checkUser());
        this.router.navigate(['/dashboard']);

      });
    }

  }
}
