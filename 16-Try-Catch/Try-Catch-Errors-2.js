let data = '{ bad json }';
 
try {
    let user = JSON.parse(data);
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
 
 
/* output
SyntaxError
Unexpected token b in JSON at position 2
*/
