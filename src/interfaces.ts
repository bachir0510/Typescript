// Interfase : es una definicion de contrato de codigo,
//osea un interfase define l "forma" de la data, con la que vamos a trabajar

interface Book {
  id: number;
  titile: string;
  author: string;
  coAuthor?: string;
  isLoan?: (id: number) => void;
}

// Usar la interfase Book en una variable
const book: Book = {
  id: 1,
  titile: "TS",
  author: "Joe",
};

// Tambien se puede usar en un array:
const books: Book[] = [
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
function getBook(): Book {
  return {
    id: 3,
    titile: "TS",
    author: "Joe",
    coAuthor: "Pedro",
  };
}
console.log(getBook());

function createBook(book: Book): Book {
  return book;
}
const newBook: Book = {
  id: 4,
  titile: "TS",
  author: "Joe",
  coAuthor: "Pedro",
};
console.log(createBook(newBook));

// Se puede extender las interfaces entre ellas por ejemplo
interface Emplopyee {
  id: number;
  name: string;
  dept: string;
}

interface Customer extends Emplopyee {
  country: string;
}

// Se puede Tambien implimentar las clases
interface Animal {
    name: string
    getCats: () => void
    getDogs: () => void
}

class Zoo implements Animal {
    name = "Gato"
    getCats(): void {
        "logica"
    } 
    getDogs(): void {
        "logica"
    } 
}
