const itemService = require('../services/itemService');

class ItemController {
    async getAllItems(req, res) {
        try {
            const items = await itemService.getAllItems();
            res.json(items);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createItem(req, res) {
        try {
            const item = await itemService.createItem(req.body);
            res.status(201).json(item);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteItem(req, res) {
        try {
            const item = await itemService.deleteItem(req.params.id);
            if (item) {
                res.json(item);
            } else {
                res.status(404).json({ error: 'Item not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ItemController();
