import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-listroom',
  templateUrl: './listroom.component.html',
  styleUrls: ['./listroom.component.css']
})
export class ListroomComponent implements OnInit {

  listroom = [];
  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.roomService.getAllRoom().subscribe(res => {
      console.log(res.room);
      this.listroom = res.room;
    });
  }
}
