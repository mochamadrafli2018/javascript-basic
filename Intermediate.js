//Function 1
function halo() {
  return "Hallo Mate!"
}
var output = halo()
console.log(output)
//Output : Hallo Mate!


//Function 2
function kalikan(x, y) {
  return x * y
}
var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // Output : 48


//Function 3
function introduce(name, age, city, hobby) {
  var kalimat = "My name is" + name + ", Iam " + age + " years old, living in " + city + ", and really love" + hobby + "!"
  return kalimat
}
var name = "Ahmad"
var age = 21
var city = "Magelang"
var hobby = "Vloging"
var perkenalan = introduce(name, age, city, hobby)
console.log(perkenalan)
//My name isAhmad, Iam 21 years old, living in Magelang, and really loveVloging!


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


//Array of Object
var buahBuah = [
  { nama: "strawberry",
    warna: "merah",
    adaBijinya: false,
    harga: 9000 
  },
  { nama: "jeruk",
    warna: "oranye",
    adaBijinya: true,
    harga: 8000
  },
  { nama: "Semangka",
    warna: "Hijau & Merah",
    adaBijinya: true,
    harga: 10000
  },
  { nama: "Pisang",
    warna: "Kuning",
    adaBijinya: false,
    harga: 5000
  }
]
console.log(buahBuah[0])
//Output : { nama: 'strawberry', warna: 'merah', adaBijinya: false, harga: 9000 }


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


//Array Function
const luasLingkaran = (r) => {
  const pi = r % 7 === 0 ? (22/7) : 3.14
  let luas = pi * r * r
  return luas
}
const kelilingLingkaran = (r) =>{
  const pi = r % 7 === 0 ? (22/7) : 3.14
  let keliling = 2 * pi * r
  return keliling
}
console.log(luasLingkaran(7))
console.log(kelilingLingkaran(7))
/*
Output : 
154
44
*/


//Template literals
let word =""
const tambahkanKata = (str) =>{
    if (word===""){
        word = `${word}${str}`
    }
    else{
        word = `${word} ${str}`
    }
}
tambahkanKata("Iam")
tambahkanKata("a")
tambahkanKata("Frontend")
tambahkanKata("Web")
tambahkanKata("Developer")
console.log(word)
//Output : Iam a Frontend Web Developer


//Template literals in arrow function
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => {
      console.log(`${firstName} ${lastName}`)
    }
  }
}
newFunction("William", "Imoh").fullName()
//Output: William Imoh


//Enhaced object literals
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}
const { firstName, lastName, destination, occupation, spell } = newObject
console.log(firstName, lastName, destination, occupation, spell)
//Output : Harry Potter Holt Hogwarts React Conf Deve-wizard Avocado Vimulus Renderus!!!


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