console.log("Nikk is a hacker")
console.log("Jay is a hecker")

setTimeout(() => {
    console.log("I am inside setTimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside setTimeout 2")
}, 0);

console.log("The end")
//Nikk is a hacker
//Jay is a hecker
//The end
//I am inside setTimeout
//I am inside setTimeout 2

const callback = (arg) => {
    console.log(arg)
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("Nik");
    document.head.append(sc)

}
  
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

