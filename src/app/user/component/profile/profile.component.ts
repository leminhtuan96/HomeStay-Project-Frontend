import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  currentUser: any;
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(this.currentUser);
    
  }

}
