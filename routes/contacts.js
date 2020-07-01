var express = require('express');
var router = express.Router();
const contacts = [];
/* GET users listing. */
router.get('/', function (req, res, next) {
    const result = JSON.stringify(contacts);
    res.send(result);
});
router.get('/:id', function (req, res, next) {
    id = req.params.id;
    const contact = contacts.find(item => item.id == id);
    if (!contact) {
        res.status = 404;
        let result = JSON.stringify({
            "error":'the contact with the this id not found'
        });
        res.send(result);
        return;
    }
    let result = JSON.stringify(contact);
    res.send(result);
});

router.post('/', function (req, res, next) {
    const {
        name,
        phone,
    } = req.body;
    if (!name) {
        const error = {
            name: 'your must enter a name!'
        };
        const result = JSON.stringify(error);
        res.status(400);
        res.send(result);
        return;
    }
    if (!phone) {
        const error = {
            phone: 'your must enter a phone!'
        };
        const result = JSON.stringify(error);
        res.status(400);
        res.send(result);
        return;
    }
    const contact = {
        ...req.body,
        id: contacts.length + 1
    };
    contacts.push(contact);
    const result = JSON.stringify(contact);
    res.send(result);
});


module.exports = router;