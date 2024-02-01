# Project 03: CSS Variables
- [Solution Before Watching Video](https://github.com/baspin94/JavaScript30/tree/7a231dda05603c6ce5f831edcb2a8b8416950cf1)
- [Revised Solution After Watching Video](https://github.com/baspin94/JavaScript30/tree/1787fc02b8731627e46c6841c3ddb36fda90734a)

## What I Learned
This was an intriguing exercise which introduced me to a concept I was as yet unfamiliar with: [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), also known as custom properties. These handy variables allow you to update multiple properties at the same time with JavaScript. Unlike the variables in the [Sass library](https://sass-lang.com/) that Wes briefly mentioned in the lesson intro, which are defined when a page is compiled, regular CSS variables can dynamically update as a user interacts with the page.

Before learning about CSS variables, here is how I would have written the CSS to match the color of some text with the background behind an image on the same page.
```css
.hl {
    color: #ffc600;
}

img {
    background: #ffc600;
}
```
Then, if I wanted to change that CSS based on the value chosen from the color input selector on the page, I would need to update both the text and the background separately with JS. I'd need to select each of the elements that needs to be updated, as well as the input, from the DOM, and attach an event listener to the input to watch for changes to the color selection and trigger a handler function. The handler would update the text color and background separately.
```javascript
const text = document.querySelector('.hl')
const image = document.querySelector('img')

const input = document.getElementById('base')
input.addEventListener("input", (e) => handleColor(e))

function handleColor(e) {
    text.style.color = e.target.value
    image.style.background = e.target.value
}
```
While this isn't so bad with just two elements being updated, it grows in repetitiveness the more elements need to be changed at once.

With CSS variables, we can pull that common value out by defining a variable for it in the root of the document (set to the default value), and then pointing to that variable next to each of the elements sharing it using `var(--variable)`.
```css
  :root {
    --color: #ffc600;
  }

  .hl {
    color: var(--color);
  }

  img {
    padding: 10px;
    background: var(--color);
  }
```
Now, instead of changing the value for each element individually, we just need to update the root value, and the elements that reference it will also update.
```javascript
const input = document.getElementById('base')
input.addEventListener("input", (e) => handleColor(e))

function handleColor(e) {
    document.body.style.setProperty('--color', e.target.value)
}
```
Simplifying this code makes it much easier to create one master event handler for updating numerous elements on the page based on a variety of user interactions, as I eventually did for this exercise. The `id` in this case refers to the input element ('spacing', 'blur', and 'base'), which, if named similarly to the variables, makes selecting the correct value to update simple with string interpolation.

```javascript
function handleChange(e) {
    id = e.target.id
    value = e.target.value
    if (id === "base") {
        document.body.style.setProperty(`--${id}`, value)
    } else {
        document.body.style.setProperty(`--${id}`, `${value}px`)
    }
}
```
One other note: I used the "input" event when setting my event listeners, and I was confused by Wes's approach of adding separate event listeners for 'mousemove' and 'change' events on the page inputs. Looking more closely at the [MDN reference for "input"](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event) though, I realized that this event type is a new addition as of March 2023. Because it's new, someone using an older device or browser version might have issues getting the page to work as intended.

## Helpful Resources
- [MDN Web Docs—Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [MDN Web Docs—blur()](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/blur)
- [MDN Web Docs—:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)
- [MDN Web Docs—Element: input event](https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event)
- [Stack Overflow—Accessing a CSS custom property through JavaScript](https://stackoverflow.com/questions/36088655/accessing-a-css-custom-property-aka-css-variable-through-javascript)