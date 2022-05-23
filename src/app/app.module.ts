import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { FooterComponent } from './admin/footer/footer.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListroomComponent } from './admin/room/listroom/listroom.component';
import { NavbaruserComponent } from './user/layout/navbaruser/navbaruser.component';
import { HomeuserComponent } from './user/component/homeuser/homeuser.component';
import { MasterComponent } from './user/master/master.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { ChangepasswordComponent } from './user/component/changepassword/changepassword.component';
import { NavbarhostComponent } from './host/layout/navbarhost/navbarhost.component';
import { RoomlistComponent } from './host/component/roomlist/roomlist.component';
import { RoomcreateComponent } from './host/component/roomcreate/roomcreate.component';
import { RoomupdateComponent } from './host/component/roomupdate/roomupdate.component';
import { MasterhostComponent } from './host/masterhost/masterhost.component';
import { RoomdetailComponent } from './host/component/roomdetail/roomdetail.component';
import { UserdetailComponent } from './user/component/userdetail/userdetail.component';
import { ShowcityComponent } from './user/component/showcity/showcity.component';
import { ProfileComponent } from './user/component/profile/profile.component';

import { BookingComponent } from './user/component/booking/booking.component';
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask,
  StorageBucket
} from "@angular/fire/storage";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingdetailComponent } from './user/component/bookingdetail/bookingdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ListroomComponent,
    NavbaruserComponent,
    HomeuserComponent,
    MasterComponent,
    LoginComponent,
    RegisterComponent,
    ChangepasswordComponent,
    NavbarhostComponent,
    RoomlistComponent,
    RoomcreateComponent,
    RoomupdateComponent,
    MasterhostComponent,
    RoomdetailComponent,
    UserdetailComponent,
    ShowcityComponent,
    ProfileComponent,
    BookingComponent,
    BookingdetailComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud")

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
