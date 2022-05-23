import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roomdetail',
  templateUrl: './roomdetail.component.html',
  styleUrls: ['./roomdetail.component.css']
})
export class RoomdetailComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
  }

}
