// Classes

class Employee {
  // Atributos
  id: number;
  name: string;
  depart: string;

  constructor(id: number, name: string, depart: string) {
    this.id = id;
    this.name = name;
    this.depart = depart;
    this.showInfo();
  }
  // Metodos
  showInfo(): void {
    console.log(this.name);
  }
}

const employee = new Employee(55, "the-cocktail", "ingenieria");

