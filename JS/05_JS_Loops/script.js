console.log("Loops")

let a = 1;
console.log(a)
console.log(a+1)
console.log(a+2)

for (let i = 0; i < 100; i++) {
    console.log(a + i)

}

let obj = {
    name: "Nikk",
    role: "programmer",
    company: "TBA"
}
for (const key in obj) {  
    const element = obj[key];
    console.log(key,element)    
}

for (const c of "Nikk") {
    console.log(c)
}

let i=5;
while (i<6) {
    console.log(i)
    i++;    
}

let i1 = 0;
do {
    console.log(i)
    i++;
} while (i1<6);