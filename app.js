// variables 
let name = 'Betsy';
const statesInUS = 52;
let sum = 5 + 4;

// functions
console.log(name.length);
console.log();

// creating an alert statement dependent on first letter of name
if (name.charCodeAt(0) >= 76) {
    alert('Back of the Line!')
} else {
    alert('Next!')

}

// calling the function
function sayHello() {
    console.log('Hello World!');
}

sayHello();

function checkAge(name, age) {
    if (age < 21) {
        alert('Sorry ' + name + ', you aren\'t old enough to view this page!')
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

 
let veggies = ['Tomatoes', 'Squash', 'Carrots'];

for (let i = 0; i < veggies.length; i++) {
    console.log(veggies [i]);
}

let people = [
    {
    name: 'Olivia',
    age: 22,
    },
    {
    name: 'Katie',
    age: 50
    },
    {
    name: 'Anna', 
    age: 24
    },
    {
    name: 'Margaux',
    age: 10
    }, 
    {
    name: 'Eloise',
    age: 17
    }]

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength(word) {
    return word.length;
}

let length = getLength('Hello World');

console.log(length);

if (length % 2 == 0) {
    alert('The world is nice and even!')
} else {
    alert('the world is an odd place!');
}