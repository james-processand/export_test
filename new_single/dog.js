class Dog {
    constructor() {
        this.name = 'Woofy'
        this.age = 4
    }

    hello() {
        console.log(`Hi I'm ${this.name} and I'm ${this.age} year's old`)
    }

    older() {
        this.age += 1
    }
}

const dog = new Dog()

module.exports = dog