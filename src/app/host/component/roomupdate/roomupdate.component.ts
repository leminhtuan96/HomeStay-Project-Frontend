import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/service/category.service';
import { CityService } from 'src/app/service/city.service';
import { RoomService } from 'src/app/service/room.service';
import { StatusService } from 'src/app/service/status.service';
import { finalize } from "rxjs/operators";
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-roomupdate',
  templateUrl: './roomupdate.component.html',
  styleUrls: ['./roomupdate.component.css']
})
export class RoomupdateComponent implements OnInit {
  room;
  id = +this.route.snapshot.paramMap.get('id');
  categories = [];
  cities = [];
  statuses = [];
  file: File = null;
  url: any;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService,
    private categoryService: CategoryService,
    private cityService: CityService,
    private statusService: StatusService, private storage: AngularFireStorage) { }
  updateRoomHost: FormGroup;
  ngOnInit() {
    this.updateRoomHost = this.fb.group({
      name: [
        "",
        [Validators.maxLength(120), Validators.minLength(6), Validators.required],
      ],
      address: ["", [Validators.required, Validators.maxLength(250)]],
      category_id: ["", [Validators.required]],
      city_id: ["", Validators.required],
      bedroom: ["", [Validators.required, Validators.min(1)]],
      bathroom: ["", [Validators.required, Validators.min(1)]],
      description: ["", [Validators.required, Validators.maxLength(250)]],
      price: ["", [Validators.required]],
      user_id: [""],
      status_id: ["", [Validators.required]]
    });
    this.roomService.detailRoomHost(this.id).subscribe(data => {
      console.log(data);
      this.room = data.room;
      this.updateRoomHost.patchValue(this.room);
    });
    this.getAllCategory();
    this.getAllCity();
    this.getAllStatus();

  }
  title = "cloudsSorage";
  selectedFile: File = null;
  imageurl;
  downloadURL: Observable<string>;


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


  updateRoom() {
    const updateRoom = this.updateRoomHost.value;
    updateRoom.img = this.imageurl;
    // console.log(updateRoom);
    // return;
    this.roomService.updateRoomHost(this.id, updateRoom).subscribe(res => {
      this.router.navigate(['/host']);
      alert("Success")
    })
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
