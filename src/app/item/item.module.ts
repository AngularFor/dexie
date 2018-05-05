import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ItemViewComponent } from './components/item-view/item-view.component';

import { ItemRoutingModule } from './item-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ItemRoutingModule
  ],
  declarations: [ ItemViewComponent ]
})
export class ItemModule { }
