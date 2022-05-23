import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/service/room.service';
import { NavbarhostComponent } from '../../layout/navbarhost/navbarhost.component';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router) {

  }
  listRoomHost = [];
  currentUser: any = "";
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.getAllRoomHosts();
  }

  getAllRoomHosts() {
    this.roomService.getAllRoomHost(this.currentUser.id).subscribe(res => {
      this.listRoomHost = res.res;
      // console.log(this.listRoomHost);

    })
  }

  deleteRoom(id) {
    let x = confirm("Are you sure");
    if (x) {
      this.roomService.deleteRoomHost(id).subscribe(() => {
        this.getAllRoomHosts();
      }, () => {
        alert('error');
      })
    } else {
      this.router.navigate(['/host']);
    }

  }





}
