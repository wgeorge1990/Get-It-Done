// ruby false values: false, nill
// js falsey values: false, null, undefined, 0, "", NAN
// why do we care about  truthy vs falsey values?
// - condintionals
// - boolean
console.log(0 && 1)
console.log(42 === '42')
// Dont use double equals
console.log(typeof 'hello')
console.log(`something plus something equals ${1 + 3}`)

for (let number = 3; number < 10; number++) {
    console.log(`number is now equal to ${number}`)
}
var will = {
    name: 'will',
    age: 32,
    sayHello: function () { console.log(`hello my name is ${this.name}`) }
}
function respondToAge(age) {
    if (age >= 18 && age <= 20) {
        console.log('you are old enought to vote but not to drink')
    } else if (age >= 21) {
        console.log('you are old enough  to drink')
    } else {
        console.log('go home you are to young')
    }
}

