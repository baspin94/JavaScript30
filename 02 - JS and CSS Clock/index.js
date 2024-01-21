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
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    // Set Position of Hands
    secondHand.style.transform = `rotate(${90 + seconds*6}deg)`
    minuteHand.style.transform = `rotate(${90 + minutes*6}deg)`
    hourHand.style.transform = `rotate(${90 + hours*30}deg)`
}

setInterval(setTime, 1000)
