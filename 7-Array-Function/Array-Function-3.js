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