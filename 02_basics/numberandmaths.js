const score = 400 // it gives output 400

const scores = new Number(400); // it gives output Number 400



// we can also change number into string so we can apply the string methods

console.log(score.toString().length); // it gives output as "400" a string value and after using length function it gives length as 3;
 

//number have different methods like fixed and precision mostly used in ecommerce app or website

console.log(score.toFixed(1)) // it gives output as 400.0
const num =125.234
console.log(num.toPrecision(3)) //it prints output as 125 if you give value to 4 then it print 125.2



const hundred = 1000000
console.log(hundred.toLocaleString()) //it gives output using comma but  it is 'us standards comma' like its output is 1,000,000
console.log(hundred.toLocaleString('en-IN')) //it gives output in indian standard - 10,000,000


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                       // Maths
 console.log(Math) //it gives output - object because it has many function like in java
 const nm =-101
 console.log(Math.abs(nm)) // it gives output as 101
 console.log(Math.round(4.3)) // 4
 console.log(Math.ceil(4.2)) // it gives output 5 because it the number is greater than (thoda sa bhi 4 se zyaada to upper wala output)
console.log(Math.floor(4.9)) //it gives output 4 (ceil ka ulta)
