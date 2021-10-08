const foo = require('./foo')
const test1 = require('./test-1')
const test2 = require('./test-2')

foo.callMe()

test1(10)
test2(20)

foo.name = 'no once'

foo.callMe()

test1(5)
test2()