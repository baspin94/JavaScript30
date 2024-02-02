# Project 04: Array Cardio Day 1
- [Solution Before Watching Video](https://github.com/baspin94/JavaScript30/tree/64db9a33a8987586a74cd8c25c002a0771d16417/04%20-%20Array%20Cardio%20Day%201)
- [Revised Solution After Watching Video](https://github.com/baspin94/JavaScript30/tree/909b54ab366bc0221710ccd01b1c47fab8acc5c5/04%20-%20Array%20Cardio%20Day%201)

This project was, as promised by the title, a great workout and refresher on the various array methods, including `.filter()`, `.map()`, `.sort()`, and, one I hadn't yet had the opportunity to work with, `.reduce()`.

## What I Learned
### Review: What Each Method Returns
These exercises were a good opportunity for me to go back and review what gets returned by each of these methods.
- `.filter()`: returns a shallow copy of original array containing the filtered values.
- `.map()`: returns a new array containing the 'mapped' elements of the original array.
- `.reduce()`: returns the accumulated/aggregated value resulting from iterating through the array (the format of which will vary depending on how you've configured it; one of the `reduce` exercises here returned an integer value; the other one an object with the tallied appearances of each 'key' element in the original array).
- `.sort()`: returns the **same** array, sorted in place.

That last item, `.sort()`, is what had me go back and review the return values, because I was getting unexpectedly identical results from Questions 3 and 5. I didn't realize that the array was being sorted in place and that the most recent sort is what would be logged for both questions.

One way of getting around this would be to use the `.toSorted()` method instead of `.sort()`, because `.toSorted()`, similar to `.filter()`, takes a shallow copy of the array first, then sorts and returns that copied array, leaving the original one intact.

However, since the questions were specifically asking to use the `.sort()` method, I ended up calling `.sort` on a copy I made of the array using the spread `...` operator.
```javascript
// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedPeople = [...people].sort()
console.log("Question 7:")
console.table(sortedPeople)
```
### `array.reduce()`
At first, I was a little intimidated by learning this new method, but once I took the time to slow down and understand how it works, I was quickly able to see the benefits of using it.

Here is how I would have written out Question 4 before learning about `.reduce()`:
```javascript
function totalLifespan(inventorArray) {
    let totalLifespan = 0
    for (let inventor of inventorArray) {
        totalLifespan += (inventor.passed - inventor.year)
    }
    return totalLifespan
}
const totalYears = totalLifespan(inventors)
console.log("Question 4:", totalYears)
```
With `.reduce()`, I was able to streamline this code quite a bit! I created my own callback function `lifespan` that would return the running total plus the current inventor's lifespan, passing that down the line until we reach the end of the 'inventors' array. 
```javascript
function lifespan(total, inventor){
    return total + (inventor.passed - inventor.year)
}
const totalYears = inventors.reduce(lifespan, 0)
console.log("Question 4:", totalYears)
```
You could even write that callback inline using an arrow function.
```javascript
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0)
console.log("Question 4:", totalYears)
```

### `console.table()`
One little extra thing I learned from the video was about the existence of the `console.table()` static method, which is an alternative to `console.log()` for making data output easier to read by organizing it into a table.

Here is what Question 1 looks like in the console with `console.log()`:
![The filtered array from question 1 as it appears with the console.log method, as an array of objects.](<CleanShot 2024-02-01 at 17.59.40.png>)

Here is what Question 1 looks like in the console with `console.table()`:
![The filtered array from question 1 as it appears with the console.table method, reorganized into a table with the headings 'index', 'first', 'last', 'year', and 'passed'](<CleanShot 2024-02-01 at 18.01.34.png>)

## Helpful Resources
- [MDN Web Docs—Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN Web Docs—Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN Web Docs—Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [MDN Web Docs—Array.prototype.toSorted()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
- [MDN Web Docs—Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [W3 Schools—JavaScript Array reduce()](https://www.w3schools.com/jsref/jsref_reduce.asp)
- [MDN Web Docs—console:table() static method](https://developer.mozilla.org/en-US/docs/Web/API/console/table_static)