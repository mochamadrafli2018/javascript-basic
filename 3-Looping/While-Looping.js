// Example 1
var firstIteration = 1;
var secondIteration = 20;

while( firstIteration <=20){
  if (firstIteration % 2 === 0){
    console.log(firstIteration + " - I love Javascript")
  }
  firstIteration++
}

/* 
Output :
First Iteration
2 - I love Javascript
4 - I love Javascript
6 - I love Javascript
8 - I love Javascript
10 - I love Javascript
12 - I love Javascript
14 - I love Javascript
16 - I love Javascript
18 - I love Javascript
20 - I love Javascript
*/

// Example 2
while( secondIteration > 0){
  if (secondIteration % 2 === 0){
    console.log(secondIteration + " - I will become a frontend developer")
  }
  secondIteration--
}
/*
Output
Second Iteration
20 - I will become a frontend developer
18 - I will become a frontend developer
16 - I will become a frontend developer
14 - I will become a frontend developer
12 - I will become a frontend developer
10 - I will become a frontend developer
8 - I will become a frontend developer
6 - I will become a frontend developer
4 - I will become a frontend developer
2 - I will become a frontend developer
*/