const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../models/Item');

// @route GET api/items
// @desc Get All Items
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items)); const express = require('express');
    const router = express.Router();

    // Item Model
    const Item = require('../models/Items'); // Asegúrate de que esto sea correcto

    // @route GET api/items 
    // @desc Get All Items
    router.get('/', (req, res) => {
        Item.findAll()
            .then(items => res.json(items))
            .catch(err => res.status(500).json({ error: err.message }));
    });

    // @route POST api/items
    // @desc Create An Item
    router.post('/', (req, res) => {
        Item.create({ name: req.body.name })
            .then(item => res.json(item))
            .catch(err => res.status(500).json({ error: err.message }));
    });

    // @route DELETE api/items/:id
    // @desc Delete An Item
    router.delete('/:id', (req, res) => {
        Item.destroy({ where: { id: req.params.id } })
            .then(() => res.json({ success: true }))
            .catch(err => res.status(500).json({ success: false, error: err.message }));
    });

    module.exports = router;

});

// @route POST api/items
// @desc Create An Item
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete An Item
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
