// Example 1
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const arrayMap = (array, fn) => {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(fn(array[i]));
    }
    return newArray;
}
const newNames = arrayMap(names, (name) => `${name}!` );
console.log({
    names,
    newNames,
});

/*
Output:
{
  names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
  newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
}
*/

// Example 2
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});
console.log(newArray);
// Output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]

// Example 3
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));
console.log(truthyArray);
// Output: [ 1, 'Hallo', 'Harry', 14 ]

// Example 4
const words = ['apple', 'orange', 'stawberry', 'coconut', 'mango', 'papaya'];
const result = words.filter(word => word.length > 5);
console.log(result);
// Output : ["orange", "stawberry", "coconut", "papaya"]

// Example 5
const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

function check(books){
  let newBooks = []
  for (let i=0;i<books.length;i++){
  	if(books[i].sales>1000000){
      newBooks.push(books[i])
    }
  }
  return newBooks
}
console.log(check(books))

/*
Output:
[
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  {
    title: 'Fifty Shades of Grey',
    author: 'E. L. James',
    sales: 3758936
  },
  {
    title: 'Harry Potter and the Deathly Hallows',
    author: 'J.K Rowling',
    sales: 4475152
  }
]
*/
