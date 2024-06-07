const Item = require('../models/Items');

class ItemRepository {
    async getAllItems() {
        return await Item.findAll();
    }

    async createItem(data) {
        return await Item.create(data);
    }

    async deleteItem(id) {
        const item = await Item.findByPk(id);
        if (item) {
            await item.destroy();
            return item;
        }
        return null;
    }
}

module.exports = new ItemRepository();
