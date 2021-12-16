//Class with Constructor
class Animal {
  constructor(name) {
    this._name = name;
    this._legs = 4;
    this._cold_blooded = false;
  }

  get name() {
    return this._name
  }

  get legs() {
    return this._legs
  }

  set legs(amount) {
    this._legs = amount
  }

  get cold_blooded() {
    return this._cold_blooded
  }

}

var sheep = new Animal("shaun");
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs) // 3

//Class Parent and Child
class Ape extends Animal {
  constructor(name) {
    super(name)

  }

  yell() {
    console.log("Auooo")
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name)
  }

  jump() {
    console.log("hop hop")
  }
}

var sungokong = new Ape("kera sakti")
sungokong.legs = 2
sungokong.yell() // "Auooo"
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)

console.log()