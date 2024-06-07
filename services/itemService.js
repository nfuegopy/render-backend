const itemRepository = require('../repositories/itemRepository');

class ItemService {
    async getAllItems() {
        return await itemRepository.getAllItems();
    }

    async createItem(data) {
        return await itemRepository.createItem(data);
    }

    async deleteItem(id) {
        return await itemRepository.deleteItem(id);
    }
}

module.exports = new ItemService();
