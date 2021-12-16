/*Before
const orderTea = () => {
    let tea = null;
    console.log("Making a tea, please wait for a minute ...");
    setTimeout(() => {
        tea = "Tea is here!";
    }, 3000);
    return tea;
}
 
const tea = orderTea();
console.log(tea);
*/ 

/* output
Making a tea, please wait for a minute ...
null
*/

//null because return tea will be executed earlier than tea = "Tea is here!"


//After
const orderTea = callback => {
    let tea = null;
    console.log("Making a tea, please wait for a minute ...");
    setTimeout(() => {
        tea = "Tea is here!";
        callback(tea)
    }, 3000);
}
 
orderTea(tea => {
    console.log(tea);
})
/* output
Making a tea, please wait for a minute ...
Tea is here! (Out in 3 second)
*/

//Add calback function and delete return
