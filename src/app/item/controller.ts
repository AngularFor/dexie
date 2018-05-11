import { DItem } from "./database";

export class CItem {

    private dItem = new DItem();

    constructor() {
        if (!this.dItem) {
            this.dItem = new DItem();
        }
    }

    createItem() {
        return this.dItem.transaction('rw', this.dItem.items, async () => {
            let id = await this.dItem.items.add({ name: "Item1", description: "sadfasdfasfasf" });
            return id;
        }).catch(e => {
            throw e.stack || e
        });
    }

    updateItem() {

    }

    getItem() {

    }

    deleteItem() {

    }

    getAllItem() {
        return this.dItem.transaction('rw', this.dItem.items, async () => {
            let items = await this.dItem.items.toArray();
            return items;
        }).catch(e => {
            throw e.stack || e
        });
    }

    getItemById() {

    }
}
