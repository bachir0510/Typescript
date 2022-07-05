"use strict";
function greet(name) {
    console.log(`Hello, ${name}`);
}
greet("Joe");
function greetUser(name = "User") {
    console.log(`Hello, ${name.toLocaleUpperCase()}`);
}
greetUser();
function getNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());
function printPosition(position) {
    console.log(`LAT ${position.lat} LONG ${position.long}`);
}
printPosition({ lat: 2, long: "4" });
