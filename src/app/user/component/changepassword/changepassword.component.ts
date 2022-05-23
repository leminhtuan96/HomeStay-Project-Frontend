import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  changepasswordForm: FormGroup = new FormGroup({
    oldpassword: new FormControl(),
    newpassword: new FormControl(),
    newconfirmpassword: new FormControl(),
  });
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  passwordChange() {
    console.log(this.changepasswordForm.value);

    this.authService.changePassword(this.changepasswordForm.value).subscribe(res => {
      localStorage.setItem('token', res.access_token);
      localStorage.setItem('user', JSON.stringify(res.user));
      this.router.navigate(['/login']);
      alert('Password changed successfully');
    }, () => {
      alert('Password are not match');
    })
  }

}
