let a = prompt("enter first no.:")
let b = prompt("enter second no.:")

//let sum = a + b   //it will append numbers not add them

if (isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not a num") //can check more errors from browser
}
let sum = parseInt(a) + parseInt(b)


try {
    console.log("The sum is: ",sum*x)
} catch (error) {
    console.log("Error aa gaya bhai")
}
