class Animal {
  constructor(name, age, isMammal) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}
//Inheritance
class Rabbit extends Animal {
  constructor(name, age, isMammal) {
    // It is used to call the constructor of the parent class and to access the parent's properties and methods.
    super(name, age, isMammal = true);
  }
  eat() {
    return `${this.name} sedang makan!`
  }
}
//Inheritance
class Eagle extends Animal {
  constructor(name, age, isMammal) {
    // It is used to call the constructor of the parent class and to access the parent's properties and methods.
    super(name, age, isMammal = false);
  }
  fly(){
    return `${this.name} sedang terbang!`
  }
}
//Instance
let myRabbit = new Rabbit('Labi', 2)
console.log(myRabbit.eat())
let myEagle = new Eagle('Elo', 4)
console.log(myEagle.fly())
