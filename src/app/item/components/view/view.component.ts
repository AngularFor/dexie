import { Component, OnInit } from '@angular/core';

import { CItem } from '../..';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  items: any = [];

  constructor() { }

  ngOnInit() {
    this.getItems();
  }

  addItem() {
    let itemController = new CItem();
    itemController.createItem().then( result => {
      alert('Create new Item: '+ result);
    }).catch ( e => {
      console.log(e);
    });
  }

  getItems() {
    let itemController = new CItem();
    itemController.getAllItem().then( items => {
      this.items = items;
    }).catch ( e => {
      console.log(e);
    });
  }

}
