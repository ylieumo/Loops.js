//Part 1: Fizz Buzz

// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i)
}

for (let i = 1; i <= 100; i++) {
   
    // Check if the number is divisible by 3
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
     // Check if the number is divisible by both 3 and 5
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    }
    // If not divisible by either 3 or 5, log the number
    else {
        console.log(i);
    }
}

// Part 2: Prime Time

for (let num = 0; num < 20; num++){
    if (num % 2 ==0){
        console.log(num + "is not a prime")
    }
    else if (num % 3 == 0){
        console.log(num + "is not a prime")
    }
    else if (num % 5 == 0){
        console.log(num + "is not a prime")
    }
    else console.log(num + "is a prime")
}



// Part 3: Feeling Loopy
let csv_data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

console.log(csv_data)