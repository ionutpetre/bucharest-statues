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
    getById: (id) => {
        return new Promise((resolve, reject) => {
            let statues = _getAllStatues().filter((statue) => {
                return statue.id == id;
            });
            if (statues.length) {
                resolve(statues[0]);
            } else {
                reject({ message: 'No statue with this id!' });
            }
        });
    }
};