import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';

import { GalleryComponent } from './gallery/gallery.component';



const routes: Routes = [
  {path : "", component : HomeComponent ,pathMatch: 'full'},
  {path : "about", component : AboutComponent ,pathMatch: 'full'},
  {path : "gallery", component : GalleryComponent ,pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }