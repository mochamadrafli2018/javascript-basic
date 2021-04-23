let data = '{ "age": 30 }';
 
try {
    let user = JSON.parse(data);
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
    console.log(user.name); // undefined
    console.log(user.age);  // 30
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}
 
/* output
JSON Error: 'name' is required.
*/
