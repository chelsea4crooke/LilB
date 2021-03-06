const express = require('express');
const router = express.Router();

//Item Model
const Contact = require('../../models/form');

//@route GET api/items

// router.get('/', (req, res) =>{
//     Item.find()
//         .sort({date: -1})
//         .then(items => res.json(items))
    
// });
//create a post

router.post('/', (req, res) =>{
    const newContact = new Contact({
        name: req.body.name,
        email: req.body.email,
        topic: req.body.topic,
        text: req.body.text
        
    });
    newContact.save().then( contact => res.json(contact));
    console.log("contact route")
});

module.exports = router;

//Delete an item

// router.delete('/:id', (req, res) =>{
//     Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({success: true})))
//     .catch(err => res.status(404).json({success: false}));
// });