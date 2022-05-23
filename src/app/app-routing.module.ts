import { RoomcreateComponent } from './host/component/roomcreate/roomcreate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { ListroomComponent } from './admin/room/listroom/listroom.component';
import { RoomlistComponent } from './host/component/roomlist/roomlist.component';
import { MasterhostComponent } from './host/masterhost/masterhost.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ChangepasswordComponent } from './user/component/changepassword/changepassword.component';
import { HomeuserComponent } from './user/component/homeuser/homeuser.component';
import { MasterComponent } from './user/master/master.component';
import { RoomupdateComponent } from './host/component/roomupdate/roomupdate.component';
import { RoomdetailComponent } from './host/component/roomdetail/roomdetail.component';

import { BookingComponent } from './user/component/booking/booking.component';

import { ShowcityComponent } from './user/component/showcity/showcity.component';
import { UserdetailComponent } from './user/component/userdetail/userdetail.component';
import { ProfileComponent } from './user/component/profile/profile.component';
import { BookingdetailComponent } from './user/component/bookingdetail/bookingdetail.component';



const routes: Routes = [
  // { path: "", component: MasterComponent },
  {
    path: 'admin',
    component: HomeComponent,
    children: [
      { path: 'list', component: ListroomComponent }
    ]
  },
  {
    path: "", component: MasterComponent,
    children: [
      { path: '', component: HomeuserComponent },
      { path: 'city/:id', component: ShowcityComponent },
      { path: 'citydetail/:id', component: UserdetailComponent },
      { path: 'profile', component: ProfileComponent },
      { path: "booking/:id", component: BookingComponent },
      { path: 'bookingdetail', component: BookingdetailComponent }
    ]
  },
  {
    path: "host", component: MasterhostComponent,
    children: [
      { path: '', component: RoomlistComponent },
      { path: 'create', component: RoomcreateComponent },
      { path: 'update/:id', component: RoomupdateComponent },
      { path: 'detail/:id', component: RoomdetailComponent }
    ]
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "changepassword", component: ChangepasswordComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  { path: "", component: MasterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
