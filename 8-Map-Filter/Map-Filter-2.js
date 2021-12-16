let work = [
    {
        name: 'study',
        duration: '20'
    },
    {
        name: 'sleep',
        duration: '30'
    },
    {
        name: 'lunch',
        duration: '10'
    },
    {
        name: 'drive',
        duration: '30'
    }
]

// Example 1
let workName = work.map((i) => i.name )
console.log(workName)
//Output : ['study','sleep','pray']

// Example 2
let workDuration =  work.map((i) => i.duration)
console.log(workDuration)
//Output : ['20','30','40]

// Example 3
let longWork = work.filter((i) => i.duration > 20 );
console.log(longWork)
/* 
Output: 
[
  { name: 'sleep', duration: '30' },
  { name: 'drive', duration: '30' }
]
*/