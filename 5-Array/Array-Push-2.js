//Add data to the array of object
var dataFilm = []
function tambahDataFilm(nama, durasi, genre, tahun){
  dataFilm.push({
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun
  })
}
tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)
/*
Output :
[
  { nama: 'LOTR', durasi: '2 jam', genre: 'action', tahun: '1999' },
  { nama: 'avenger', durasi: '2 jam', genre: 'action', tahun: '2019' },
  {
    nama: 'spiderman',
    durasi: '2 jam',
    genre: 'action',
    tahun: '2004'
  },
  { nama: 'juon', durasi: '2 jam', genre: 'horror', tahun: '2004' }
]
*/