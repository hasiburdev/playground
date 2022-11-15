"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollection_1 = require("./NumbersCollection");
const numbers = new NumbersCollection_1.NumbersCollection([
    23, 4, 3, 54, 4343, 345, 343, 443, 433, 34323,
]);
numbers.sort();
console.log(numbers);
const string = new CharactersCollection_1.CharactersCollection("Hello");
string.sort();
console.log(string);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(5);
linkedList.add(-34);
linkedList.add(343);
linkedList.add(34343);
linkedList.add(-34343);
linkedList.sort();
linkedList.print();
