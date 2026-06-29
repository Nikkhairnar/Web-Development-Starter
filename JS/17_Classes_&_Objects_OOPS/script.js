class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created....")
    }
    eats(){
        console.log("Kha rha hoon!")
    }
    jumps(){
        console.log("Kood rha hoon!")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("Object is created and it is lion")
    }
    eats(){
        super.eats()
        console.log("Sher hoon Kha rha hoon!")
    }
}

let a = new Animal("Tommy");
console.log(a)

let l = new Lion("Sheru")
console.log(l)