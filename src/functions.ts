
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}
greet("Joe");

function greetUser(name: string = "User"): void {
  console.log(`Hello, ${name.toLocaleUpperCase()}`);
}
greetUser();

function getNumber(): number {
  return Math.floor(Math.random() * 100);
}
console.log(getNumber());

function printPosition(position: { lat: number; long: number | string }) {
  console.log(`LAT ${position.lat} LONG ${position.long}`);
}
printPosition({ lat: 2, long: "4" });
