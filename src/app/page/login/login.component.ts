import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });
  ngOnInit() { }

  get f() {
    return this.loginForm.controls;
  }
  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (res) => {
        if (res.user.role_id == 1) {
          localStorage.setItem("token", res.access_token);
          localStorage.setItem("admin", JSON.stringify(res.user));
          this.router.navigate(["/admin"]);
        } else if (res.user.role_id == 2) {
          localStorage.setItem("token", res.access_token);
          localStorage.setItem("user", JSON.stringify(res.user));
          this.router.navigate(["/host"]);
        } else {
          localStorage.setItem("token", res.access_token);
          localStorage.setItem("user", JSON.stringify(res.user));
          this.router.navigate([""]);
        }
      },
      (error) => {
        alert("Account or Password is wrong!");
        this.router.navigate(["/login"]);
      }
    );
  }
}
