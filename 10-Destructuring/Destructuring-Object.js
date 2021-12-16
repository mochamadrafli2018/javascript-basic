// Manually
var studentName = {
    afirstName: 'Peter',
    alastName: 'Parker'
};
const afirstName = studentName.afirstName;
const alastName = studentName.alastName;
console.log(afirstName)

// Destructuring
var studentName = {
    bfirstName: 'Peter',
    blastName: 'Parker'
};
const {bfirstName, blastName} = studentName
console.log(bfirstName)