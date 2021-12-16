/*Promise 3 condition:
Pending
Fulfilled
Rejected
*/

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Coffee is here");
    } else {
        reject("Coffee Machine can't be used");
    }
}
 
 
const makeCoffee = () => {
    return new Promise(executorFunction);
}
const coffeePromise = makeCoffee();
console.log(coffeePromise);
 
 
/* output
Promise { 'Coffee is here' }
*/
