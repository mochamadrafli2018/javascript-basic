//Asynchronous
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients, function(ingredients) {
        makeTheDough(ingredients, function(dough) {
            pourDough(dough, function(pouredDough) {
                bakeACake(pourDough, function(cake) {
                    console.log(cake);
                })
            })
        })
    });
}

//Asynchronous with Promise
function makeACake(...rawIngredients) {
    collectIngredients(rawIngredients)
        .then(makeTheDough)
        .then(pourDough)
        .then(bakeACake)
        .then(console.log);
}
