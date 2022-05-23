import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';

@Component({
  selector: 'app-bookingdetail',
  templateUrl: './bookingdetail.component.html',
  styleUrls: ['./bookingdetail.component.css']
})
export class BookingdetailComponent implements OnInit {

  currentUser: any = '';
  bookingdetail: any = [];
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("user"));
    this.bookingDetail();
  }

  bookingDetail() {
    this.bookingService.historyBooking(this.currentUser.id).subscribe(res => {
      this.bookingdetail = res;
    })
  }

}
