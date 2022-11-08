// // ASYNCHRONOSITY
// JavaScript is a synchronous langauge
// meaning it goes line by line in the code therefore
// it cant move on to next line until finishing one line
// async is when other code can run while awaiting response


const printHello = () => console.log("hello (timeout 0ms)")
setTimeout(printHello, 0) //delays the synchronosity
console.log("me first")
console.log("me second?")



// const displayTweets = () => console.log("tweets")
// // const tweets = fetch("http://twitter.com/will/1")
// // 350ms wait while a request is sent to Twitter HQ
// displayTweets(tweets)
// // more code to run
// console.log("I want to runnnn!")
// //therefore this is inefficent code as it must wait for a reply to move on





const printHello2 = () => console.log("Hello2 (timed out 1000ms)");
setTimeout(printHello2, 1000);
console.log("Me first! 2");





function printHello3() { console.log("Hello3"); }
// function blockFor1Sec() { //blocks in the JavaScript thread for 1 sec 
// }
setTimeout(printHello3, 0);
// blockFor1Sec()
console.log("Me first! 3");

// it doesnt matter how many ms it is. an asynchronous function will always run after all the sync ones
// as shown below

const printBye = () => console.log("bye");
setTimeout(printBye, 0)

for (let i = 0; i < 100000; i++) {
    console.log(`hello ${i}`)
};
// me first will still run before printHello because printHello is ushed to the back of the queue (async queue)







// const inductionStove = {
//     brand: "Phillips",
//     price: "$23",
//     weight: "4kg"
// };
// const {brand, weight} = inductionStove;
// console.log(weight)








// const myAsync = async () => {
//     console.log('first');

//     const response = await fetch('https://www.gov.uk/bank-holidays.json');

    
//     console.log('second');
    
//     const data = await response.json();
//     console.log('forth', data);

//     console.log('third');
//     return 'return';
// }

// myAsync().then(res => console.log(res) )






// PROMISES
// All setTimeout happens in the browser and cannot be brought back until all the synchronous
// get run
// With PROMISES, it initialiases a place holder in JS for and does background work in the browser

function display(data) {
    console.log(data)
}
const futureData = fetch('https://twitter.com/will/tweets/1');
// fetch is half JS feature that automatically initialises an object that looks like this
const fetch2 = {
    value: "",
    on_fulfilled: []
};
// when data comes back i.e. the value property is filled. any function in "on_fulfilled" can run
futureData.then(display);

console.log("me first") //this gets run first btw

// .then() - allows a function to be passed into a promise when it is fulfilled
// i.e. it pushes it into the fetch.on_fulfilled array

// GO OVER MICROTASK QUEUE 

setTimeout(printHello, 0);
// printHello added to the back of the queue
const futureData2 = fetch('https://twitter.com/will/tweets/1')
futureData2.then(display)
// display() placed into onfulfilled
blockFor300ms()
// then is block for 300ms
// say fetch('https://twitter.com/will/tweets/1') comes back before 300ms and is added to queue before the next line (sync code has priority)
console.log("Me first!"); 
// and then after both console.log and display, printhello can run