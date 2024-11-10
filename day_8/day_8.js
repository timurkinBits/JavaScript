// 1

const dog = {}

// 2

console.log(dog)

// 3

dog.name = 'dog'
dog.legs = 4.5
dog.age = 3
dog.bark = function() {
    return 'woof woof'
}

// 4

console.log(dog.name, dog.legs, dog.age, dog.bark())

// 5

dog.breed = 'shepherd'
dog.getDogInfo = function() {
    console.log(dog.name, dog.legs, dog.age, dog.bark())
}

dog.getDogInfo()