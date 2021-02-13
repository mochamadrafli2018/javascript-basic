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

// soal 2
console.log("----SOAL 2----")
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.timer = setInterval(this.render.bind(this), 1000);
    
    // dengan arrow function
    // this.timer = setInterval(() => this.render(), 1000);
  }
}

var clock = new Clock({ template: 'h:m:s' });
clock.start();
