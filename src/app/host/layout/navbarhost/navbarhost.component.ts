import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbarhost',
  templateUrl: './navbarhost.component.html',
  styleUrls: ['./navbarhost.component.css']
})
export class NavbarhostComponent implements OnInit {
  logoutForm: FormGroup;
  constructor(private authService: AuthService,
    private router: Router) { }
  currentUser: any = '';
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    this.authService.logoutUser().subscribe(() => {
      this.router.navigate(['']);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    })
  }
}
