import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

// const numbers = new NumbersCollection([0, 13, 342, 34, 5345]);
// const sorter = new Sorter(numbers);
// sorter.sort();

// console.log(numbers);

// const string = new CharactersCollection("Hello");
// const sorter = new Sorter(string);
// sorter.sort();
// console.log(sorter);

const ll = new LinkedList();
ll.add(5);
ll.add(-34);
ll.add(343);
ll.add(34343);
ll.add(-34343);
const sorter = new Sorter(ll);
sorter.sort();
ll.print();
