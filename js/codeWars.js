function duplicateCount(text) {
        const array = text.split("");
        const duplicateItems = array.filter(
                (item) => array.indexOf(item) !== array.lastIndexOf(item)
        );
        return [...new Set(duplicateItems)].length;
}
console.log(duplicateCount("helloooo"));
