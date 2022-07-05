"use strict";
// Interfase : es una definicion de contrato de codigo,
//osea un interfase define l "forma" de la data, con la que vamos a trabajar
// Usar la interfase Book en una variable
const book = {
    id: 1,
    titile: "TS",
    author: "Joe",
};
// Tambien se puede usar en un array:
const books = [
    {
        id: 1,
        titile: "TS",
        author: "Joe",
    },
    {
        id: 2,
        titile: "TS",
        author: "Joe",
        coAuthor: "Pedro",
    },
];
// Usar la interfase Book en una funciones
function getBook() {
    return {
        id: 3,
        titile: "TS",
        author: "Joe",
        coAuthor: "Pedro",
    };
}
console.log(getBook());
function createBook(book) {
    return book;
}
const newBook = {
    id: 4,
    titile: "TS",
    author: "Joe",
    coAuthor: "Pedro",
};
console.log(createBook(newBook));
class Zoo {
    constructor() {
        this.name = "Gato";
    }
    getCats() {
        "logica";
    }
    getDogs() {
        "logica";
    }
}
