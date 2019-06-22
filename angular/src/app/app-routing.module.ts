import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToDosComponent} from  './components//to-dos/to-dos.component';
const routes: Routes = [
  {path: '', component: ToDosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
