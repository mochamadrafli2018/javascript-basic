const books = [
  { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
  { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
  { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
  { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
  { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
  { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
  { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

// Filter book that has sales more than 1000000
let filterBook = books.filter((i) => i.sales > 1000000)
console.log(filterBook)

// Map or rewrite the file that have filtered
let greatAuthors = filterBook.map((i) => `${i.author} adalah penulis buku ${i.title} yang sangat hebat!`)
console.log(greatAuthors)

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
[
  'Dan Brown adalah penulis buku The Da Vinci Code yang sangat hebat!',
  'E. L. James adalah penulis buku Fifty Shades of Grey yang sangat hebat!',
  'J.K Rowling adalah penulis buku Harry Potter and the Deathly Hallows yang sangat hebat!'
]
*/