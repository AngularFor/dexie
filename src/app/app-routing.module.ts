import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '' , loadChildren: './item/item.module#ItemModule'},
  { path: 'item' , loadChildren: './item/item.module#ItemModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
