//how to create date
//date is a object if you check type of date then displays object

const date = new Date()
console.log(date);
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleDateString())
console.log(date.toLocaleString())

//you can also create own date

const myDate = new Date(2025,0,25)
console.log(myDate.toDateString())

//you can also find timestamp means current time from 1 jan 1970. it gives in mili second

const currentTimestamp = Date.now()
console.log(currentTimestamp);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getDay())
