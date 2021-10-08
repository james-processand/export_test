class Dog {
    constructor() {
        if (Dog.instance instanceof Dog) {
            return Dog.instance
        }

        this.name = 'woofy'
        this.age = 4
        Dog.instance = this
    }

    hello() {
        console.log(`Hi I'm ${this.name} and I'm ${this.age} year's old`)
    }

    older() {
        this.age += 1
    }

}

const dog1 = new Dog()
const dog2 = new Dog()

dog1.older()
dog1.hello()
dog2.older()
dog2.hello()