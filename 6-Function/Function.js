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