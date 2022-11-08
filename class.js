// DOT NOTATION AND NESTED FN

const user1 = {
    name: "Will",
    score: 3,
    increment: () =>  user1.score++
};
user1.increment(); //user1.score -> 4

const user2 = {
    name: "Stephanie",
    score: 5,
    increment: () => user2.score++
};
user2.increment();

    // Object.create initialises object but you can just use const user3 = {};
const user3 = Object.create(null);
console.log(user3);

user3.name = "Timmy";
user3.score = 9;
user3.increment = () => user3.score++;

console.log(user3);
user3.increment();
console.log(user3);

// simplify this code at it breaks the DONT REPEAT YOURSELF principle

const createUser = (name, score) => {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = () => newUser.score++;
    return newUser
};

const user4 = createUser("John", 14);
user4.increment();
console.log(user4);