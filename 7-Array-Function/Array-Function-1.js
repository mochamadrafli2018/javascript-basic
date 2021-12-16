// Example 1
const hello = () => {
  console.log('Hello!')
};

// Example 2
const say = (someFunction) => {
  someFunction();
}

// Example 3
const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayHello()();