import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from 'src/app/service/city.service';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-showcity',
  templateUrl: './showcity.component.html',
  styleUrls: ['./showcity.component.css']
})
export class ShowcityComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('id');
  listRoomCity = [];
  currentUser: any = '';
  constructor(private roomService: RoomService,
    private cityService: CityService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    this.getAllRoomCity();
  }
  // getUserLogin(): object {
  //   return JSON.parse(localStorage.getItem('user'));
  // }

  getAllRoomCity() {
 
    this.cityService.getByIdCity(this.id).subscribe(res => {
      // console.log(res);
      this.listRoomCity = res


    })
  }

}
