// Grab Clock Hands
const hourHand = document.querySelector(".hour-hand")
const minuteHand = document.querySelector(".min-hand")
const secondHand = document.querySelector(".second-hand")

const hands = [hourHand, minuteHand, secondHand]

// Move Hands Ahead
function setTime(){
    // Get Current Time
    const date = new Date()

    const hours = date.getHours()
    const hourDegrees = ((hours/12) * 360) + 90
    
    const minutes = date.getMinutes()
    const minuteDegrees = ((minutes/60) * 360) + 90

    const seconds = date.getSeconds()
    const secondDegrees = ((seconds/60) * 360) + 90

    // Set Position of Hands
    secondHand.style.transform = `rotate(${secondDegrees}deg)`
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    if (secondDegrees === 90) {
        for (let hand of hands) hand.style.transition = "0s"
    
    } else {
        for (let hand of hands) {
            hand.style.transition = "all 0.05s"
            hand.style.transitionTimingFunction = "cubic-bezier(0.1, 2.7, 0.58, 1)"
        }
    }
}

setInterval(setTime, 1000)
