angular.module('StatuesApp')
    .constant("DIALOG", {
        "TITLE": "Despre aplicatie",
        "CONTENT": "Aplicatia STATUI IN BUCURESTI este realizata  in anul universitar 2016-2017 de catre studentii de la masterul de IE Facultatea CSIE din ASE.",
        "OK_BTN": "Continuare"
    })
    .constant("TABS", [{
        "id": 1,
        "name": "Toate statuile"
    }, {
        "id": 2,
        "name": "Statui in ordine alfabetica"
    }, {
        "id": 3,
        "name": "Statui dupa profile"
    }]);