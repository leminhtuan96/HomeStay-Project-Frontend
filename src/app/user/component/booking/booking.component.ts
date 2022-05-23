import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../../service/booking.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StatusService } from '../../../service/status.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../service/category.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  id = +this.route.snapshot.paramMap.get('id');
  currentUser: any = '';
  showroom: any = '';

  constructor(private bookingService: BookingService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
  }


  bookingForm = this.fb.group({
    "startDay": ["", [Validators.required]],
    "endDay": ["", [Validators.required]]
  })
  addBooking: FormGroup;

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("user"));
    this.bookingService.getRoom(this.id).subscribe(room => {
      this.showroom = room;
    })
  }
  get f() {
    return this.bookingForm.controls;
  }

  calculateDay() {
    let startDay = this.bookingForm.value.startDay
    startDay = new Date(startDay);

    let endDay = this.bookingForm.value.endDay
    endDay = new Date(endDay)
    return Math.floor((Date.UTC(endDay.getFullYear(), endDay.getMonth(),
      endDay.getDate()) - Date.UTC(startDay.getFullYear(), startDay.getMonth(), startDay.getDate())) / (1000 * 60 * 60 * 24));

  }


  bookingRoom() {
    const totalDay = this.calculateDay();
    const totalPrice = this.showroom.price * totalDay;
    const bookingForm = this.bookingForm.value;
    bookingForm.user_id = this.currentUser.id;
    bookingForm.status_id = 2;
    bookingForm.room_id = this.showroom.id;
    bookingForm.price = totalPrice;
    this.showroom.startDay = this.bookingForm.value.startDay;
    this.showroom.endDay = this.bookingForm.value.endDay;
    this.showroom.totalprice = totalPrice;
    return this.bookingForm.value;

  }

  addBookingRoom() {
    console.log(this.bookingRoom());
    this.bookingService.booking(this.bookingRoom()).subscribe(() => {
      alert('Success')
      this.router.navigate(['/bookingdetail'])
    }, () => { alert('fail') });


  }



}
