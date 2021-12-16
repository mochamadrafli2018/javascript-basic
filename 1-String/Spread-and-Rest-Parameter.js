//Spread and Rest Parameter
const west = ["Auf", "Zaid", "Ali", "Hana"]
const east = ["Salman", "Abdul", "Aisha", "Harits"]
const combined = [...west, ...east]
console.log(combined)

/*Output :
[
  'Auf',    'Zaid',
  'Ali',    'Hana',
  'Salman', 'Abdul',
  'Aisha',  'Harits'
] 
*/