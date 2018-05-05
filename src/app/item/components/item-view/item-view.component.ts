import { Component, OnInit } from '@angular/core';
import { CItem } from '../..';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  name: string = "Lasantha";

  constructor() { }

  ngOnInit() {
  }

  async addItem() {
    try{
      let itemController = new CItem();
      let result = await itemController.createItem();
      alert('Create new Item: '+ result);
    } catch (e) {
      alert(e);
    }
  }

  getItems() {
    // let db = new ITEM.DItem();
    // db.transaction('rw', db.items, async () => {
    //   // Query:
    //   let items = await db.items.toArray();
    //   let stringItmes = "";
    //   items.forEach(item => {
    //     stringItmes += JSON.stringify(item);
    //   });
    //   // Show result:
    //   alert("My items: " + stringItmes);
    // });
  }

}
