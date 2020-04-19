"use strict";

const router = require("express").Router(),
  statueService = require("./statue.service");

router.get("/", (req, res) => {
  statueService
    .getAllStatues()
    .then((statues) => {
      res.status(200).send(statues);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

router.get("/categories", (req, res) => {
  statueService
    .getAllStatueCategs()
    .then((statueCategs) => {
      res.status(200).send(statueCategs);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

router.get("/contributors", (req, res) => {
  statueService
    .getAllStatueContributors()
    .then((statueContributors) => {
      res.status(200).send(statueContributors);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

router.get("/contributors/details", (req, res) => {
  statueService
    .getAllStatueContributorsDetails()
    .then((statueContributors) => {
      res.status(200).send(statueContributors);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

router.get("/addresses", (req, res) => {
  statueService
    .getAllStatueAddresses()
    .then((statueAddresses) => {
      res.status(200).send(statueAddresses);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  statueService
    .getById(id)
    .then((statue) => {
      res.status(200).send(statue);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

module.exports = router;
