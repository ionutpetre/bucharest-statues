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

router.get('/categories', (req, res) => {
    statueService.getAllStatueCategs().then(statueCategs => {
        res.status(200).send(statueCategs);
    }).catch(err => {
        res.status(400).send(err);
    });
});

router.get('/contributors', (req, res) => {
    statueService.getAllStatueContributors().then(statueContributors => {
        res.status(200).send(statueContributors);
    }).catch(err => {
        res.status(400).send(err);
    });
});

router.get('/contributors/details', (req, res) => {
    statueService.getAllStatueContributorsDetails().then(statueContributors => {
        res.status(200).send(statueContributors);
    }).catch(err => {
        res.status(400).send(err);
    });
});

router.get('/addresses', (req, res) => {
    statueService.getAllStatueAddresses().then(statueAddresses => {
        res.status(200).send(statueAddresses);
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