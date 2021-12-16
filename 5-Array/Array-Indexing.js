//Indexing array and store it to an object
var arrayDaftarPeserta = ["Omar", "laki-laki", "Coding" , 2000]
var objectPeserta = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  tahunLahir: arrayDaftarPeserta[3]
}
console.log(objectPeserta)
/*
Output :
{
  nama: 'Omar',
  jenisKelamin: 'laki-laki',
  hobi: 'Coding',
  tahunLahir: 2000
}
*/