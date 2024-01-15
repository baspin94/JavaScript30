# Project 01: JavaScript Drum Kit
- [Solution Before Watching Video](https://github.com/baspin94/JavaScript30/tree/bcae524c6c58b696e0d62c1c1d3d2c952fc835ac/01%20-%20JavaScript%20Drum%20Kit)
- [Revised Solution After Watching Video](https://github.com/baspin94/JavaScript30/tree/b3fe0e1f978ee397ca625deb82322c865761ddc9/01%20-%20JavaScript%20Drum%20Kit)

This was a very fun exercise that got me reacquainted with event listeners and query selectors in JavaScript, as well as introducing me to working with embedded audio. Now to practice my drum skills... 🥁

## My Approach
- I wrote my JavaScript in a separate `index.js` file and linked it to the HTML with the `<script>` `src` tag, to separate out the HTML structure from the JS functionality.

- I added my event listeners to `document` rather than `window`. I was curious as to when you would want to attach to one vs the other and found this helpful [StackOverflow article](https://stackoverflow.com/questions/12045440/difference-between-document-addeventlistener-and-window-addeventlistener) on the differences. Basically, in many circumstances, it sounds like they’re interchangable, but best practice is to choose the one with a smaller scope if you could use either (so, `document` over `window`).

- Instead of creating an event listener for `transitionend` (which was a new concept for me; I didn’t know you could create listeners for CSS-related events), I created a separate event listener for `keyup` events. Each keypress has a `keydown` and `keyup` event associated with it. `element.classList.remove("playing")` gets called on the `keyup` event. I tried it Wes’s way, but the animation kept getting stuck when I held down a key for a long period of time, so I switched back to my way.

- As a bonus exercise, I also added functionality for playing the sounds and animations when the buttons are clicked. The biggest challenge with the click event was figuring out how to grab the parent `.key` `<div>` even when one of its children (`<kbd>`, `<span>`) got clicked. I added some logic to check whether `event.target` was one of the child nodes and grab the `parentElement` value instead.

## Next Steps
Another feature I'd like to add on here in the future is a built-in metronome.

## Helpful Resources
- `document.addEventListener()` [MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) and [StackOverflow](https://stackoverflow.com/questions/32027935/addeventlistener-is-not-a-function-why-does-this-error-occur) (re: error message I was getting when trying to add an event listener to all the elements in a collection)
- `<audio>` Embed Audio element: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#attributes)
- `KeyboardEvent` objects: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- `element.classList` `.add` and `.remove` methods: [StackOverflow](https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript)
- CSS Attribute Selectors: [w3Schools](https://www.w3schools.com/css/css_attribute_selectors.asp)
- `document.querySelector` method: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
- `document.querySelectorAll`: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- HTML `data-*` attribute: [w3Schools](https://www.w3schools.com/tags/att_data-.asp)
- `mousedown` events: [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event)
- `mouseup` events:  [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event)
- `<kbd>` input element: [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)