// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const boulevards = ["Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard Mortier", "Boulevard Poniatowski", "Boulevard Soult", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard du Général-d'Armée-Jean-Simon", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard Lefebvre", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Malesherbes", "Boulevard Marguerite-de-Rochechouart", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"
]
    
// Array.prototype.filter() => creates a shallow copy, returns new array
// 1. Filter the list of inventors for those who were born in the 1500's
const century16 = inventors.filter((inventor) => (inventor.year >= 1500 && inventor.year < 1600))
console.log("Question 1:", century16)

// Array.prototype.map() => creates new array
// 2. Give us an array of the inventors first and last names
const inventorNames = inventors.map((inventor) => inventor.first + " " + inventor.last)
console.log("Question 2:", inventorNames)

// Array.prototype.sort() => sorts in place, returns same array
// 3. Sort the inventors by birthdate, oldest to youngest
function compareInventors(inventor1, inventor2) {
    return inventor1.year - inventor2.year
}
const inventorsByBirthdate = [...inventors].sort(compareInventors)
console.log("Question 3:", inventorsByBirthdate)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
function lifespan(total, inventor){
    return total + (inventor.passed - inventor.year)
}
const totalYears = inventors.reduce(lifespan, 0)
console.log("Question 4:", totalYears)

// 5. Sort the inventors by years lived
function compareLifespan(inventor1, inventor2){
    let lifespan1 = inventor1.passed - inventor1.year
    let lifespan2 = inventor2.passed - inventor2.year

    return lifespan1 - lifespan2
}

const inventorsByLifespan = [...inventors].sort(compareLifespan)
console.log("Question 5:", inventorsByLifespan)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const deBoulevards = boulevards.filter(boulevard => boulevard.includes("de"))
console.log("Question 6:", deBoulevards)

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedPeople = [...people].sort()
console.log("Question 7:", sortedPeople)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

function tally(object, item) {
    (item in object)
    ? object[item]++
    : object[item] = 1
    return object
}

const talliedItems = data.reduce(tally, {})
console.log("Question 8:", talliedItems)