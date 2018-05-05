import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemViewComponent } from './components/item-view/item-view.component';

const routes: Routes = [
  {
    path: 'view',
    component: ItemViewComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule]
})
export class ItemRoutingModule { }
