"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // @TypeGuard
                // This block is for numbers.
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // This block is for strings.
                if (typeof this.collection === "string") {
                }
            }
        }
    }
}
const sorter = new Sorter([0, -13, -342, 34, 5345]);
sorter.sort();
console.log(sorter.collection);
