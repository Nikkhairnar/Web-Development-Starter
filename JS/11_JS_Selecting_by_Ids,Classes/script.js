console.log("Nikhil")

let boxes = document.getElementsByClassName("box")
console.log(boxes)
//can see at console tab in dev tools chrome

boxes[2].style.backgroundColor = "red"

document.getElementById("red").style.backgroundColor = "red"


document.querySelector(".box").style.backgroundColor = "green"

//use for loop for queryselectorall
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "green"
})

