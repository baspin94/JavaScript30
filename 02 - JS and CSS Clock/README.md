# Project 02: JS and CSS Clock
- [Solution Before Watching Video](https://github.com/baspin94/JavaScript30/tree/4cdea92b676afeaf09c8c9507a1746c5320c15fe/02%20-%20JS%20and%20CSS%20Clock)
- [Revised Solution After Watching Video](https://github.com/baspin94/JavaScript30/tree/8b3ad650f6fe985ebd3ab1cda8352525d5674518/02%20-%20JS%20and%20CSS%20Clock)

This exercise was an interesting challenge that gave me some more experience with CSS animations (transformations and transitions), working with dates in JavaScript, and the `setInterval` function.

## My Approach
### Finding the Time
 I ended up taking a similar approach to Wes did for finding the current time with `new Date()` and grabbing the individual hours, minutes, and seconds from that timestamp using the `.getHours()`, `.getMinutes()`, and `getSeconds()` methods. I took an extra step to write a helper function that would convert the hours to a 12-hour time format but later would discover that this wasn't necessary for the purpose of rotating the hour hand around the clock.
 
 ### Setting Degrees
 We differed on how to set the number of degrees to rotate the hands. The approach I took was to figure out how much of a proportion of 360 degrees each measure would take with each 'tick' of the clock.
 - 360 degrees/60 seconds = 6 degrees
 - 360 degrees/60 minutes = 6 degrees
 - 360 degrees/12 hours = 30 degrees

 I calculated the time to insert into each of the template literals for updating the `transform` property of the hands this way, starting with an offset of 90 (to account for the initial rotation of the hands from the '9' to the '12' position) and then adding time measure multiplied by how many degrees each movement would take:
 ```javascript
 secondHand.style.transform = `rotate(${90 + seconds * 6}deg)`
 minuteHand.style.transform = `rotate(${90 + minutes * 6}deg)`
 hourHand.style.transform = `rotate(${90 + hours * 30}deg)`
 ```
 Meanwhile, Wes divided each time measure by how many of them were in one rotation around the clock, multiplied that by 360, and then added an offset of 90. The end result was the same.

 ```javascript
 const hourDegrees = ((hours/12) * 360) + 90
 const minuteDegrees = ((minutes/60) * 360) + 90
 const secondDegrees = ((seconds/60) * 360) + 90
 ```
### Updating the Appearance of the Hands
After figuring out the movement of the hands, I wanted to update their appearance to be closer to that of an actual analog clock, which usually has a skinnier seconds hand and a shorter hour hand. As it was at the start of this challenge, it was difficult for me to tell the hands apart.

Updating the seconds hand was just a matter of updating the `height` property of `.second-hand` to give it that slimmer appearance, but I had to do a little more work with the hour hand. Updating the `width` property's percentage had the desired effect of making the hand shorter but had the undesired effect of making it float off to the side from the other hands.

![Clock with misplaced hour hand floating apart from seconds and minute hand](<CleanShot 2024-01-22 at 02.39.23.png>)

It took me a little bit to figure out that I could specify `right: 50%` for the positioning of the divs in the `.hand` class to line everything up correctly.

### Transitions and Transition-Timing-Function
I thought my clock looked nice and functional as is, and hadn't even considered the possibility of adding any animation to it, but seeing the extra pizzazz Wes's transitions (especially the cubic-bezier timing function for the realistic recoil when the second hand moves) gave to the clock made me want to give it a try.

The difficult part here was figuring out how to remedy the blip that occurred when a hand completes a complete rotation and resets position, which Wes said could be resolved with JS functionality to briefly remove the `transition` property. However, I later found out that when I disabled `transition`, the `transition-timing-function` wouldn't come back automatically, and I would have to add some additional logic to my code to get that working again.

```javascript
if (secondDegrees === 90) {
        secondHand.style.transition = "0s"
        minuteHand.style.transition = "0s"
        hourHand.style.transition = "0s"
} else {
    secondHand.style.transition = "all 0.05s"
    secondHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)"

    minuteHand.style.transition = "all 0.05s"
    minuteHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)"

    hourHand.style.transition = "all 0.05s"
    hourHand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)"
}
```
## Next Steps
1. Try moving the hands by incrementation from the original time instead of setting a new time with each interval. With the methods I'm using right now, the hour hand stays on the hour until the next hour, instead of gradually moving in between the two hours like it would on a clock.

2. Add in options for:
- ticking sounds
- chime on the hour
- alarm at time user sets

# Helpful Resources
- [MDN—`Date.now()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
- [MDN—`Date()` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)
- [MDN—CSS `rotate()` transform property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate)
- [MDN—CSS `transform-origin` property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
- [MDN—`setInterval` function](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [W3Schools—transitionTimingFunction property](https://www.w3schools.com/jsref/prop_style_transitiontimingfunction.asp)

