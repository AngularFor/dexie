import Dexie from 'dexie';

export class DItem extends Dexie {
    items: Dexie.Table<IItem, number>;

    constructor() {
        super("DItem");
        this.version(1).stores({
            items: "++id,name,description"
        });
    }
}
