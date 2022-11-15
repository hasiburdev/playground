import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const numbers = new NumbersCollection([
  23, 4, 3, 54, 4343, 345, 343, 443, 433, 34323,
]);
numbers.sort();
console.log(numbers);

const string = new CharactersCollection("Hello");
string.sort();
console.log(string);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(-34);
linkedList.add(343);
linkedList.add(34343);
linkedList.add(-34343);
linkedList.sort();
linkedList.print();
