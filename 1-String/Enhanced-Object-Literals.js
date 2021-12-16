// Enhaced object literals
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