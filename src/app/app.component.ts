import { Component } from '@angular/core';

import { CItem } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
