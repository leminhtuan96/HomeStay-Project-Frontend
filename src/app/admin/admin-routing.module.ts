import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListroomComponent } from './room/listroom/listroom.component';


const routes: Routes = [
  // {path : 'list' , component : ListroomComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
