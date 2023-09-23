import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EtelekComponent } from './etelek/etelek.component';
import { ItalokComponent } from './italok/italok.component';

const routes: Routes = [
  {"path":"home", "component":HomeComponent},
  {"path":"etelek", "component":EtelekComponent},
  {"path":"italok", "component":ItalokComponent},
  {"path":" ", "component":HomeComponent},
  {"path":"**", "component":HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
