import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/service/city.service';
import { RoomService } from 'src/app/service/room.service';


@Component({
  selector: 'app-homeuser',
  templateUrl: './homeuser.component.html',
  styleUrls: ['./homeuser.component.css']
})
export class HomeuserComponent implements OnInit {

  listroom = [];
  listcity = [];
  constructor(private roomService: RoomService,
    private cityService: CityService,) { }

  ngOnInit() {
    this.getAllRoom();
    this.getAllCity();

  }

  getAllRoom() {
    this.roomService.getAllRoom().subscribe(res => {
      this.listroom = res.room;
    })
  }

  getAllCity() {
    this.cityService.getAllCity().subscribe(res => {
      this.listcity = res;
    })
  }



}
