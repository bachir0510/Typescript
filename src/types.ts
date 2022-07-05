// Bacic Types
let typeString: string = 'Hello Word';
let typeNumber: number = 5;
let typeBoolean: boolean = false;

// Inferncia de Tipos: si no se asigna el tipo en la variable, su tipo sera depende de la primer valor
let fullName = 'Joe Joe';
let age  = 5;
let active = false;

// Arrays
const numbers: number[] = [1, 8, 3] // se puede utilizar Array<number>
const users: string[] = ['Angel', 'Joe','Pedro']
const text: any[] = [1, 'hello', true]

// Unions : puede agregar diferentes tipos
let myUnion: number | boolean = true
