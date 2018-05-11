import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ItemRoutingModule } from './item-routing.module';

import { MainComponent } from './components/main/main.component';
import { ViewComponent } from './components/view/view.component';
import { AddComponent } from './modal/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    ItemRoutingModule
  ],
  declarations: [
    MainComponent,
    ViewComponent,
    AddComponent
  ]
})
export class ItemModule { }
