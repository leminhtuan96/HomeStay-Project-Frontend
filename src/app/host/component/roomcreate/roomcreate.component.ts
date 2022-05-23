import { StatusService } from "./../../../service/status.service";
import { CategoryService } from "./../../../service/category.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RoomService } from "src/app/service/room.service";
import { CityService } from "src/app/service/city.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-roomcreate",
  templateUrl: "./roomcreate.component.html",
  styleUrls: ["./roomcreate.component.css"],
})
export class RoomcreateComponent implements OnInit {

  title = "cloudsSorage";
  selectedFile: File = null;
  imageurl;
  downloadURL: Observable<string>;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private router: Router,
    private categoryService: CategoryService,
    private cityService: CityService,
    private statusService: StatusService, private storage: AngularFireStorage
  ) { }
  currentUser: any = "";
  createRoomForm = this.fb.group({
    name: ["", [Validators.maxLength(120), Validators.minLength(6), Validators.required],],
    address: ["", [Validators.required, Validators.maxLength(250)]],
    category_id: ["", [Validators.required]],
    city_id: ["", Validators.required],
    bedroom: ["", [Validators.required]],
    bathroom: ["", [Validators.required]],
    description: ["", [Validators.required, Validators.maxLength(250)]],
    price: ["", [Validators.required]],
    user_id: [""],
    status_id: ["", [Validators.required]]
  });
  categories = [];
  cities = [];
  statuses = [];
  file: File = null;
  url: any;
  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("user"));
    this.getAllCategory();
    this.getAllCity();
    this.getAllStatus();
  };



  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.imageurl = url;
            }
            console.log(this.imageurl);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          // console.log(url);
        }
      });
  }


  get f() {
    return this.createRoomForm.controls;
  }

  createRoom() {
    const room = this.createRoomForm.value;
    room.user_id = this.currentUser.id;
    room.image = this.imageurl;
    // console.log(room);
    // return;
    this.roomService.createRoomHost(room).subscribe(() => {
      this.router.navigate(["/host"]);
    });
  }

  onChange(event) {
    const urlSize = URL.createObjectURL(event.target.files[0]);

    console.log(urlSize);


    this.url = urlSize
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe((res) => {
      this.categories = res;
    });
  }

  getAllCity() {
    this.cityService.getAllCity().subscribe((res) => {
      this.cities = res;
    });
  }

  getAllStatus() {
    this.statusService.getAllStatus().subscribe((res) => {
      this.statuses = res;
    });
  }

}
