// Template literals
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

// Template literals in arrow function
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