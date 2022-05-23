import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CityService } from 'src/app/service/city.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {

  logoutForm: FormGroup;
  listcity: any = [];

  constructor(private authService: AuthService,
    private router: Router,
    private cityService: CityService,
    private userService: UserService) { }
  currentUser: any = '';
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    // this.getAllCity();
  }


  getAllCity() {
    this.cityService.getAllCity().subscribe(res => {
      this.listcity = res;
    })
  }



  logout() {
    this.authService.logoutUser().subscribe(() => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      location.reload();
    })
  }
  searchForm: FormGroup = new FormGroup({
    "price": new FormControl(),
    "city": new FormControl(),
    "name": new FormControl(),
  })

  listRoomCity = [];
  search() {
    this.userService.searchRoom(this.searchForm.value).subscribe(room => {
      this.listRoomCity = room;

    })
  }

}
