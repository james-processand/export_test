const foo = require("./foo")

module.exports = (val = 0) => {
    foo.val += val
    foo.callMe()
}