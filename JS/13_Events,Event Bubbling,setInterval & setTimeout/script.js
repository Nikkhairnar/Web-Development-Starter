let button = document.getElementById("btn")

//button.addEventListener("click", () => {
//    document.querySelector(".box").innerHTML = "<b>You were clicked</b>"
//})

//can check mdn for more events

button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>You were clicked</b>"
})

button.addEventListener("contextmenu", () => {
    alert("Dont Right click please")
})

button.addEventListener("keydown", (e) => {
    console.log(e.key , e.keyCode)
})   //check console

