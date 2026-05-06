//1 jan 1970 --> 0 milisecond
//24 hours
//60 minutes
//60 seconds
//1000 milliseconds

const date = new Date()
console.log(date);
//const date1 = new Date("1990-01-01")
const date1 = new Date("1990-01-01T12:30:45")
console.log(date1);
const date2 = new Date(2022,1,5)
console.log(date2);
const date3 = new Date(2022,1,5,12,30,45)
console.log(date3);
const date4 = new Date(100)
console.log(date4);

//get

console.log("Year :" + date.getFullYear());
console.log("Month :" + date.getMonth());
console.log("Day :" + date.getDay());
console.log("Date :" + date.getDate());
console.log("Hours :" + date.getHours());
console.log("Minutes :" + date.getMinutes());
console.log("Seconds :" + date.getSeconds());
console.log("Milliseconds :" + date.getMilliseconds());
console.log("time in milisecond :",date.getTime())



const date5 = new Date()
date5.setFullYear(2024)
date5.setMonth(11)
date5.setDate(31)
date5.setHours(23)
date5.setMinutes(59)
date5.setSeconds(59)
date5.setMilliseconds(999)
console.log(date5);


// bd ---->