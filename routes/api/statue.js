'use strict';

let router = require('express').Router(),
    statueService = require('./../services/statue');

router.get('/', (req, res) => {
    statueService.getAllStatues().then(statues => {
        res.status(200).send(statues);
    }).catch(err => {
        res.status(400).send(err);
    });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    statueService.getById(id).then(statue => {
        res.status(200).send(statue);
    }).catch(err => {
        res.status(400).send(err);
    });
});
module.exports = router;