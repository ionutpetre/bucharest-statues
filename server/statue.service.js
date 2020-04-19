"use strict";

const fs = require("fs");
const path = require("path");

const STATUES_FILE_PATH = path.join(__dirname, "./statues.data.json");
const statues = JSON.parse(fs.readFileSync(STATUES_FILE_PATH).toString());

module.exports = {
  getAllStatues: () => new Promise((resolve) => resolve(statues)),

  getAllStatueCategs: () =>
    new Promise((resolve) => {
      const uniqueStatueCategs = statues
        .map((statue) => statue.category)
        .filter(
          (statueCateg, statueCategIndx, statueCategs) =>
            statueCategs.indexOf(statueCateg) === statueCategIndx
        );
      resolve(uniqueStatueCategs);
    }),

  getAllStatueContributors: () =>
    new Promise((resolve) => {
      const uniqueStatueContributors = statues
        .map((statue) => statue.contributor)
        .filter(
          (statueContributor, statueContributorIdx, statueContributors) =>
            statueContributors.indexOf(statueContributor) ===
            statueContributorIdx
        );
      resolve(uniqueStatueContributors);
    }),

  getAllStatueContributorsDetails: () =>
    new Promise((resolve) => {
      const uniqueStatueContributors = statues
        .map((statue) => ({
          student: statue.contributor,
          data: statue.contributorDate,
        }))
        .filter(
          (statueContributor, statueContributorIdx, statueContributors) =>
            statueContributors.indexOf(statueContributor) ===
            statueContributorIdx
        );
      resolve(uniqueStatueContributors);
    }),

  getAllStatueAddresses: () =>
    new Promise((resolve) => {
      const uniqueStatueAddresses = statues
        .map((statue) => statue.address)
        .filter(
          (statueAddress, statueAddressIdx, statueAddresses) =>
            statueAddresses.indexOf(statueAddress) === statueAddressIdx
        );
      resolve(uniqueStatueAddresses);
    }),

  getById: (id) =>
    new Promise((resolve, reject) => {
      const statue = statues.find((statue) => statue.id == id);
      if (!statue) {
        reject(new Error("No statue with this id!"));
      } else {
        resolve(statue);
      }
    }),
};
