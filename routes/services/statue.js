'use strict';

let fs = require('fs');
const STATUES_FILE_PATH = './statues.json';

let _getAllStatues = () => {
    return JSON.parse(fs.readFileSync(STATUES_FILE_PATH).toString());
}

module.exports = {
    getAllStatues: () => {
        return new Promise((resolve, reject) => {
            resolve(_getAllStatues());
        });
    },
    getAllStatueCategs: () => {
        return new Promise((resolve, reject) => {
            let statueCategs = _getAllStatues().map((statue) => {
                return statue.category;
            });
            let uniqueStatueCategs = statueCategs.filter((_statueCateg, _statueCategIndx, _statueCategs) => {
                return _statueCategs.indexOf(_statueCateg) === _statueCategIndx;
            });
            resolve(uniqueStatueCategs);
        });
    },
    getAllStatueContributors: () => {
        return new Promise((resolve, reject) => {
            let statueContributors = _getAllStatues().map((statue) => {
                return statue.contributor;
            });
            let uniqueStatueContributors = statueContributors.filter((_statueContributor, _statueContributorIdx, _statueContributors) => {
                return _statueContributors.indexOf(_statueContributor) === _statueContributorIdx;
            });
            resolve(uniqueStatueContributors);
        });
    },
    getAllStatueContributorsDetails: () => {
        return new Promise((resolve, reject) => {
            let statueContributors = _getAllStatues().map((statue) => {
                return {
                    "student": statue.contributor,
                    "data": statue.contributorDate
                };
            });
            let uniqueStatueContributors = statueContributors.filter((_statueContributor, _statueContributorIdx, _statueContributors) => {
                return _statueContributors.indexOf(_statueContributor) === _statueContributorIdx;
            });
            resolve(uniqueStatueContributors);
        });
    },
    getAllStatueAddresses: () => {
        return new Promise((resolve, reject) => {
            let statueAddresses = _getAllStatues().map((statue) => {
                return statue.address;
            });
            let uniqueStatueAddresses = statueAddresses.filter((_statueAddress, _statueAddressIdx, _statueAddresses) => {
                return _statueAddresses.indexOf(_statueAddress) === _statueAddressIdx;
            });
            resolve(uniqueStatueAddresses);
        });
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            let statues = _getAllStatues().filter((statue) => {
                return statue.id == id;
            });
            if (statues.length) {
                let statue = statues[0];
                resolve(statue);
            } else {
                reject({ message: 'No statue with this id!' });
            }
        });
    }
};