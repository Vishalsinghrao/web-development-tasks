/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let gen = Math.random()
let first, second, third;
// 0 0.33 0.66 1


// Lets generate the first word
if (gen < 0.33) {
    first = "Crazy"
}
else if (gen < 0.66 && gen >= 0.33) {
    first = "Amazing"
}
else {
    first = "Fire"
}

// Lets generate the second word
gen = Math.random()
if (gen < 0.33) {
    second = "Engine"
}
else if (gen < 0.66 && gen >= 0.33) {
    second = "Foods"
}
else {
    second = "Garments"
}

// Lets generate the third word
gen = Math.random()
if (gen < 0.33) {
    third = "Bros"
}
else if (gen < 0.66 && gen >= 0.33) {
    third = "Limited"
}
else {
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)
