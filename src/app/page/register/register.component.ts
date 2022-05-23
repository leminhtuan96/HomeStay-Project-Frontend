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
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    username: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    phone: ["", [Validators.required, Validators.maxLength(10)]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirmPassword: ["", [Validators.required]],
    role_id: ["", [Validators.required]],
  });
  contentEditable: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() { }

  get f() {
    return this.registerForm.controls;
  }
  register() {
    // console.log(this.registerForm.value);
    if (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    ) {
      this.router.navigate(["/register"]);
      alert("Password are not matching");
      return;
    } else {
      this.authService.register(this.registerForm.value).subscribe(
        () => {
          this.router.navigate(["/login"]);
          alert("Success");
        },
        () => {
          this.router.navigate(["/register"]);
          alert("Fail");
        }
      );
    }
  }
}
