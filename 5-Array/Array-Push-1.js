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
        name: 'pray',
        duration: '10'
    }
]

let workName = []
for (let i=0; i<work.length; i++){
    workName.push(work[i].name)
}
console.log(workName)
//Output : ['study','sleep','pray']

let workDuration = []
for (let i=0; i<work.length; i++){
    workDuration.push(work[i].duration)
}
console.log(workDuration)
//Output : ['20','30','40]