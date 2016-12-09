angular.module('StatuesApp')
    .constant("DIALOG", {
        "TITLE": "Despre aplicatie",
        "CONTENT": "Aplicatia STATUI IN BUCURESTI este realizata  in anul universitar 2016-2017 de catre studentii de la masterul de IE Facultatea CSIE din ASE.",
        "OK_BTN": "Continuare"
    })
    .constant("FILTERS", [{
        "id": 1,
        "name": "Toate statuile",
        "selected": true
    }, {
        "id": 2,
        "name": "Statui in ordine alfabetica",
        "selected": false
    }, {
        "id": 3,
        "name": "Statui dupa categorie",
        "selected": false
    }])
    .constant("CATEGORIES", ['Personaje', 'Politicieni', 'Istorici', 'Pedagogi', 'Scriitori/Preoti']);