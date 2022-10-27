const apples: number = 5;
const speed: string = "fast";
const hasName: boolean = true;
const nothingMuch: null = null;
const nothing: undefined = undefined;

// Built in objects
const now: Date = new Date();

// Array
const colors: string[] = ["red", "green", "blue"];
const myNumbers: number[] = [1, 2, 3];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x": 10, "y": 20}';
// JSON.parse returns any type
const coordinates: { x: number; y: number } = JSON.parse(json);
