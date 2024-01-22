// Convert Hours to 12 Hour Time
function convertHours(date) {
    const hours = date.getHours()
    if (hours < 12) return hours
    return hours - 12
}

// Grab Clock Hands
const hourHand = document.querySelector(".hour-hand")
const minuteHand = document.querySelector(".min-hand")
const secondHand = document.querySelector(".second-hand")

// Move Hands Ahead
function setTime(){
    // Get Current Time
    const date = new Date()

    const hours = convertHours(date)
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
}

setInterval(setTime, 1000)
