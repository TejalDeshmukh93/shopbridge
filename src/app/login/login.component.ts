import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup; // formgroupname

  constructor(private fb: FormBuilder, private route: Router) {}

  ngOnInit() {
    this.initialzedFrom();
  }

  initialzedFrom() {
    // formcontrolnames
    this.loginForm = this.fb.group({
      username: ["admin", Validators.required],
      password: ["admin", Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  submitform() {
    const loginData = this.loginForm.value;
    let islogin = loginData.username && loginData.password === "admin";
    if (islogin === true) {
      alert("Success");
      this.route.navigate(["/item-list"]);
    } else {
      alert("wrong credential");
    }
  }
}
