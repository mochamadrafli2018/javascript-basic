// Example 1
for(var i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 2 === 1){
      console.debug(i + " - I Love Coding")
    }else if(i % 2 === 1){
      console.debug(i + " - without")
    }else{
      console.debug(i + " - Code")
    }
}   
/*
Output
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

// Example 2
for(var i = 1; i <= 7; i++) {
    var x = "";
    for(var j = 1; j <= i; j++) {
     x = x + '#';
    }
    console.log(x);
}

/*
Output
#
##
###
####
#####
######
####### 
*/