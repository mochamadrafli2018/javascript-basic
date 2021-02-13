//Sum all string
var firstWord = "I'll";
var secondWord = "be";
var thirdWord = "fullstack";
var fourthWord = "developer";
var Words= firstWord + " " + (secondWord[0].toUpperCase() + secondWord.slice(1))  + " " + thirdWord + " " + fourthWord.toUpperCase();
console.log(Words) //Output : I'll Be fullstack DEVELOPER

//String to Integer
var firstNumber = "1";
var secondNumber = "2";
var thirdNumber = "4";
var fourthNumber = "5";
var Numbers = parseInt(firstNumber) + parseInt(secondNumber) + parseInt(thirdNumber) + parseInt(fourthNumber) 
console.log(Numbers) //Output : 12

//Slicing
var kalimat = 'javascript is extremely easy one';  //just kidding
var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14);  
var kataKetiga = kalimat.substring(15,18);  
var kataKeempat = kalimat.substring(19,24); 
var kataKelima= kalimat.substring(25,31);; 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
console.log();
/*Output :
Kata Pertama: jav
Kata Kedua: script is
Kata Ketiga: xtr
Kata Keempat: mely
Kata Kelima: asy on
*/

//If Else
var nilai = 79; 

if (nilai >= 80){
  console.log("A")
}else if(nilai >= 70 && nilai < 80){
  console.log("B")
}else if(nilai >=60 && nilai < 70){
  console.log("C")
}else if (nilai >= 50 && nilai < 60){
  console.log("D")
}else{
  console.log("E")
}
//Output : B


//Switch-Case
var date = 22;
var month = 7;
var year = 2020;
var strMonth

switch(month){
  case 1: {
    strMonth = "Januari";
    break;
  }
  case 2: {
    strMonth = "Februari";
    break;
  }
  case 3: {
    strMonth = "Maret";
    break;
  }
  case 4: {
    strMonth = "April";
    break;
  }
  case 5: {
    strMonth = "Mei";
    break;
  }
  case 6: {
    strMonth = "Juni";
    break;
  }
  case 7: {
    strMonth = "Juli";
    break;
  }
  case 8: {
    strMonth = "Agustus";
    break;
  }
  case 9: {
    strMonth = "September";
    break;
  }
  case 10: {
    strMonth = "Oktober";
    break;
  }
  case 11: {
    strMonth = "November";
    break;
  }
  case 12: {
    strMonth = "Desember";
    break;
  }
  default:{
    strMonth = "invalid"
  }
}

console.log(date + " " + strMonth + " " + year)
//Output : 22 Juli 2020


//While Looping
var firstIteration = 1;
var secondIteration = 20;

console.log('First Iteration')
while( firstIteration <=20){
  if (firstIteration % 2 === 0){
    console.log(firstIteration + " - I love Javascript")
  }
  firstIteration++
}
/* Output :
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

console.log('Second Iteration')
while( secondIteration > 0){
  if (secondIteration % 2 === 0){
    console.log(secondIteration + " - I will become a frontend developer")
  }
  secondIteration--
}
/*Output
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


//For looping
for(var i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 2 === 1){
      console.debug(i + " - I Love Coding")
    }else if(i % 2 === 1){
      console.debug(i + " - without")
    }else{
      console.debug(i + " - Code")
    }
}   
/*Output
1 - without
2 - Code
3 - I Love Coding
4 - Code
5 - without
6 - Code
7 - without
8 - Code
9 - I Love Coding
10 - Code
11 - without
12 - Code
13 - without
14 - Code
15 - I Love Coding
16 - Code
17 - without
18 - Code
19 - without
20 - Code
*/  

for(var i = 1; i <= 7; i++) {
    var x = "";
    for(var j = 1; j <= i; j++) {
     x = x + '#';
    }
    console.log(x);
}

/*Output
#
##
###
####
#####
######
####### 
*/


//Split words and store it in an array
var secondWords="saya sangat senang belajar javascript"
var splitWords = secondWords.split(" ")
console.log(splitWords)
//Output : [ 'saya', 'sangat', 'senang', 'belajar', 'javascript' ]


//Array sorting
var listFruits = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var sortFruits = listFruits.sort()
for(var i = 0; i < listFruits.length; i++) {
  console.log(sortFruits[i])
}
/*
Output:
1. Mangga
2. Apel
3. Anggur
4. Semangka
5. Jeruk
*/
