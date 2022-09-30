import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { MainCompComponent } from './main-comp/main-comp.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { TableUsersComponent } from './table-users/table-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-comp',
    pathMatch: 'full'
  },
  {
    path: 'main-comp',
    component: MainCompComponent
  },
  {
    path: 'display-users',
    component: DisplayUsersComponent
  },
  {
    path: 'add-users',
    component: AddUsersComponent
  },
  {
    path: 'table-users',
    component: TableUsersComponent
  },
  {
    path: 'table-users/update-users/:id',
    component: UpdateUsersComponent
  },
  {
    path: 'table-users/delete-users/:id',
    component: DeleteUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
