//Spread syntax (...)
//Case 1
console.log()
console.log('-----Rest and Spread Operators-----')
function sum(x,y,z){return x+y+z;}
const numbers=[1,2,3];
//Operation for all numbers in array
console.log(sum(...numbers));
console.log(sum.apply(1,numbers));

//Case 2
console.log()
let array=[0,1,2];
let newNumber=12;
//add 12 to end of array
numberStore=[...array,newNumber];
console.log(numberStore);

//Case 3
console.log()
let arr1=[0,1,2];
let arr2=[3,4,5];
console.log(arr1=arr1.concat(arr2));
let arr3=[0,1,2];
let arr4=[3,4,5];
console.log(arr5=[...arr3,...arr4]);

//Case 4
console.log()
//without rest paraeter
function afun(a,b){
    return a+b;
}
console.log(afun(1,2))// Output : 3
console.log(afun(1,2,3,4,5))// Output : 3
//with rest parameter ES6
function bfun(...input){
    let sum=0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
console.log(bfun(1,2)) //  Output : 3
console.log(bfun(1,2,3)) //  Output : 6
console.log(bfun(1,2,3,4,5)) //  Output : 15

//Case 5
console.log()
function astring(a,b,...c){
    console.log(`${a} ${b}`); 
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Lionel'));
}
astring('Mukul','Latiyan','Lionel','Messi','Barcelona');
/* 
Output :
Mukul Latiyan
['Lioner','Messi','Barcelona']
Lionel
3
0
*/

//Case 6
console.log()
var kalimat=""
function bstring(a){
    var kalimatBaru = `${kalimat} ${a}`;
    process.stdout.write(kalimatBaru);
}
bstring('Saya');
bstring('Senang');
bstring('Belajar');