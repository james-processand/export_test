class Dog {
    bark() {
        console.log("woof");
    }
}


const newDog = new Dog()
console.log("dog.js was initialized")

module.exports = {
    myInstance: newDog,
    myClass: Dog
}