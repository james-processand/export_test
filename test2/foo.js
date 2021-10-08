let instance

class Foo {
    constructor() {
        this.name = 'Foo'
        this.val = 1
    }

    callMe() {
        console.log(`Hi! I'm ${this.name}, val: ${this.val}`)
    }
}

module.exports = (() => {
    console.log("export was called");
    if (instance) {
        return instance
    }

    instance = new Foo()
    return instance
})()