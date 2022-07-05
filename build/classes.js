"use strict";
// Classes
class Employee {
    constructor(id, name, depart) {
        this.id = id;
        this.name = name;
        this.depart = depart;
        this.showInfo();
    }
    // Metodos
    showInfo() {
        console.log(this.name);
    }
}
const employee = new Employee(55, "the-cocktail", "ingenieria");
