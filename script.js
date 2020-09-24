// Question 1
console.log("Question 1")

let i = 15

while (i<= 20){
    console.log (i)
    i = i+1
}

// Question 2
console.log("Question 2")

for (var j =1; j < 100; j += 2 ){
    console.log(j)
}

//Question 3
console.log("Question 3")

for (var k = 7; k <= 84; k +=7 ){
    console.log(k)
}

//Question 4
console.log("Question 4")

var sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(add, 0);

function add(a, b) {

return a + b;

}

console.log(sum)

//Question 5
console.log("Question 5")
 
let array = [23, 14, 3, 76, 88]

e = [];
 
for (var f = 0; f < array.length; ++f) { 
    if ((array[f] % 2) == 0) {
        e.push(array[f])

    }
}
var total = e. reduce(function(a, b){

return a + b
},0)
console.log (total)


// Question 6

console.log("Question 6")

let MArray = [101, 392, 892, 73, 44]

var max = MArray.reduce(function(a, b){
    return Math.max (a,b);

})
console.log (max)


// Question 7

console.log("Question 7")

let rev = [99, 33, 44, 75, 11, 101]

const reversed = rev.reverse ()

console.log(reversed)


// Question 8

console.log("Question 8")

const v = [1, 2, 3, 4, 5]
v.unshift(v.pop())

console.log(v)


// Question 9

console.log("Question 9")

let n = 100;

nextPrime:
for (let p = 2; p <= n; p++) { // for each p...

  for (let j = 2; j < p; j++) { // look for a divisor..
    if (p % j == 0) continue nextPrime; // not a prime, go next i
  }

 console.log(p); // a prime
}


// Question 10

console.log("Question 10")

function fib(n){
    let arr = [0, 1];
    for (let m = 2; m < n + 1; m++){
      arr.push(arr[m - 2] + arr[m -1])
    }
   return arr[n]
  }
  console.log(n)

 