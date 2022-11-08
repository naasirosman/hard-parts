const tenSquared = () => 10**2;
console.log(tenSquared());

const nineSquared = () => 9**2;
console.log(nineSquared());

// PRINCIPLE: Don't repeat yourself (DRY) therefore
const squared = x => x**2
console.log(squared(9))


// example + revision of map
const array = [1, 2, 3];
const output = [];
const copyArrayAndMultiplyBy2 = (array) => {
        array.map((element, index) => {  
        output.push(element * 2) })
    };

console.log(copyArrayAndMultiplyBy2(array))
