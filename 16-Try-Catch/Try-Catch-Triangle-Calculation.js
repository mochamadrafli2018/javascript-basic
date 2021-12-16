//Check the value of 3 input of triangle

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateNumberInput (a,b,c){
    if (typeof a !== 'number'){
        throw new ValidationError('First value must be a number')
    }
    else if (typeof b !== 'number'){
        throw new ValidationError('Second value must be a number')
    }
    else if (typeof c !== 'number'){
        throw new ValidationError('Third value must be a number')
    }
}

const detectTriangle = (a, b, c) => {
    try{
        validateNumberInput (a,b,c)
        
        if (a === b && b === c) {
            return 'Segitiga sama sisi';
        }
        if (a === b || a === c || b === c) {
            return 'Segitiga sama kaki';
        }
        return 'Segitiga sembarang';
    } 
    catch (error){
        return `${error.message}`;    
    }
};

//Test
console.log(detectTriangle('3', 3, 5))

//Output : First value must be a number
